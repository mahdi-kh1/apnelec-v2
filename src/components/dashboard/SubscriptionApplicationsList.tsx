"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface SubscriptionApplication {
  id: number;
  userId: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  subscriptionType: string;
  receiptCode: string;
  receiptPhotoPath: string;
  brandPhotoPath: string | null;
  status: 'pending' | 'approved' | 'rejected';
  notes: string;
  createdDate: string;
}

export default function SubscriptionApplicationsList() {
  const { data: session } = useSession();
  const [applications, setApplications] = useState<SubscriptionApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // For approval form
  const [selectedApp, setSelectedApp] = useState<SubscriptionApplication | null>(null);
  const [approvalForm, setApprovalForm] = useState({
    subscriptionType: 'Basic',
    duration: 30, // days
    isActive: true
  });
  
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('/api/subscription-applications');
        
        if (!response.ok) {
          throw new Error('Failed to fetch applications');
        }
        
        const data = await response.json();
        setApplications(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchApplications();
  }, []);
  
  const handleApprovalFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setApprovalForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : type === 'number' 
          ? parseInt(value) 
          : value
    }));
  };
  
  const handleApprove = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedApp) return;
    
    try {
      const response = await fetch(`/api/subscription-applications/${selectedApp.id}/approve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subscriptionType: approvalForm.subscriptionType,
          durationDays: approvalForm.duration,
          isActive: approvalForm.isActive
        })
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to approve application');
      }
      
      // Update application in the list
      setApplications(prevApps => 
        prevApps.map(app => 
          app.id === selectedApp.id 
            ? { ...app, status: 'approved' } 
            : app
        )
      );
      
      // Close the modal
      setSelectedApp(null);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };
  
  const handleReject = async (id: number) => {
    try {
      const response = await fetch(`/api/subscription-applications/${id}/reject`, {
        method: 'POST'
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to reject application');
      }
      
      // Update application in the list
      setApplications(prevApps => 
        prevApps.map(app => 
          app.id === id 
            ? { ...app, status: 'rejected' } 
            : app
        )
      );
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };
  
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  
  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Subscription Applications</h2>
      </div>
      
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Applicant</th>
                  <th>Type</th>
                  <th>Receipt</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map(app => (
                  <tr key={app.id}>
                    <td>{app.id}</td>
                    <td>
                      <div>
                        <div>{app.user.firstName} {app.user.lastName}</div>
                        <small>{app.user.email}</small>
                      </div>
                    </td>
                    <td>{app.subscriptionType}</td>
                    <td>
                      <div>Code: {app.receiptCode}</div>
                      <a href={app.receiptPhotoPath} target="_blank" className="btn btn-sm btn-outline-info">
                        View Receipt
                      </a>
                    </td>
                    <td>{new Date(app.createdDate).toLocaleDateString()}</td>
                    <td>
                      <span 
                        className={`badge ${
                          app.status === 'approved' 
                            ? 'bg-success' 
                            : app.status === 'rejected' 
                              ? 'bg-danger' 
                              : 'bg-warning'
                        }`}
                      >
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </span>
                    </td>
                    <td>
                      {app.status === 'pending' && (
                        <div className="btn-group">
                          <button 
                            className="btn btn-sm btn-success"
                            onClick={() => setSelectedApp(app)}
                          >
                            Approve
                          </button>
                          <button 
                            className="btn btn-sm btn-danger"
                            onClick={() => handleReject(app.id)}
                          >
                            Reject
                          </button>
                        </div>
                      )}
                      <a href={`/dashboard/subscription-applications/${app.id}`} className="btn btn-sm btn-info ms-1">
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
                
                {applications.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center">
                      No applications found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Approval Modal */}
      {selectedApp && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Approve Subscription</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedApp(null)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleApprove}>
                  <div className="mb-3">
                    <label htmlFor="subscriptionType" className="form-label">Subscription Type</label>
                    <select 
                      id="subscriptionType"
                      name="subscriptionType"
                      className="form-select"
                      value={approvalForm.subscriptionType}
                      onChange={handleApprovalFormChange}
                      required
                    >
                      <option value="Basic">Basic</option>
                      <option value="Standard">Standard</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Duration (days)</label>
                    <input 
                      type="number"
                      id="duration"
                      name="duration"
                      className="form-control"
                      value={approvalForm.duration}
                      onChange={handleApprovalFormChange}
                      min="1"
                      required
                    />
                  </div>
                  
                  <div className="mb-3 form-check">
                    <input 
                      type="checkbox"
                      id="isActive"
                      name="isActive"
                      className="form-check-input"
                      checked={approvalForm.isActive}
                      onChange={handleApprovalFormChange}
                    />
                    <label htmlFor="isActive" className="form-check-label">
                      Activate immediately
                    </label>
                  </div>
                  
                  <div className="d-flex justify-content-end gap-2">
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setSelectedApp(null)}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                    >
                      Approve
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 