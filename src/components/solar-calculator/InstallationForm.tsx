"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

// Define TypeScript interfaces
interface RoofData {
  orientation: number;
  slope: number;
  shadeFactor: number;
  pvOutput: number;
  type: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  postcode: string;
  street: string;
  city: string;
  telephone: string;
  buildingUse: string;
  propertyType: string;
  roofs: RoofData[];
  // For website customers
  isWebsiteCustomer: boolean;
}

interface CalculationResult {
  installation: any;
  pdfPath: string;
  success: boolean;
}

export default function InstallationForm() {
  const { data: session } = useSession();
  const router = useRouter();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Customer details
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    
    // Address details
    postcode: '',
    street: '',
    city: '',
    telephone: '',
    buildingUse: 'Domestic',
    propertyType: 'Semi-detached',
    
    // Roof details
    roofs: [
      {
        orientation: 0,
        slope: 30,
        shadeFactor: 0,
        pvOutput: 0,
        type: 'Tile'
      }
    ],
    
    // For website customers
    isWebsiteCustomer: true
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<CalculationResult | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRoofChange = (index: number, field: keyof RoofData, value: number | string) => {
    setFormData(prev => {
      const updatedRoofs = [...prev.roofs];
      updatedRoofs[index] = {
        ...updatedRoofs[index],
        [field]: value
      };
      return {
        ...prev,
        roofs: updatedRoofs
      };
    });
  };
  
  const addRoof = () => {
    setFormData(prev => ({
      ...prev,
      roofs: [
        ...prev.roofs,
        {
          orientation: 0,
          slope: 30,
          shadeFactor: 0,
          pvOutput: 0,
          type: 'Tile'
        }
      ]
    }));
  };
  
  const removeRoof = (index: number) => {
    if (formData.roofs.length > 1) {
      setFormData(prev => {
        const updatedRoofs = [...prev.roofs];
        updatedRoofs.splice(index, 1);
        return {
          ...prev,
          roofs: updatedRoofs
        };
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/installations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to save installation');
      }
      
      setResults(data);
      setStep(4); // Move to results step
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };
  
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  
  return (
    <div className="container">
      <div className="row">
        <section id="selection-wizard-costum" className="col-md-9">
          <div className="wizard">
            <div className="wizard-inner">
              <div className="connecting-line"></div>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className={step === 1 ? 'active' : ''}>
                  <a href="#step1" onClick={() => setStep(1)} title="Customer Details">
                    <span className="round-tab">
                      <i className="fa fa-user"></i>
                    </span>
                  </a>
                </li>
                <li role="presentation" className={step === 2 ? 'active' : ''}>
                  <a href="#step2" onClick={() => setStep(2)} title="Address Details">
                    <span className="round-tab">
                      <i className="fa fa-home"></i>
                    </span>
                  </a>
                </li>
                <li role="presentation" className={step === 3 ? 'active' : ''}>
                  <a href="#step3" onClick={() => setStep(3)} title="Roof Details">
                    <span className="round-tab">
                      <i className="fa fa-solar-panel"></i>
                    </span>
                  </a>
                </li>
                <li role="presentation" className={step === 4 ? 'active' : ''}>
                  <a href="#step4" onClick={() => results && setStep(4)} title="Results">
                    <span className="round-tab">
                      <i className="fa fa-chart-bar"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Customer Details */}
              {step === 1 && (
                <div className="tab-pane active" id="step1">
                  <h4>Customer Details</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Mobile</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          name="mobile" 
                          value={formData.mobile} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                  </div>
                  <ul className="list-inline pull-right">
                    <li>
                      <button type="button" className="btn btn-primary next-step" onClick={nextStep}>
                        Next
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              
              {/* Steps 2-4 as before... */}
              
              {/* Step 4: Results */}
              {step === 4 && results && (
                <div className="tab-pane active" id="step4">
                  <h3>Calculation Results</h3>
                  
                  <div className="card">
                    <div className="card-header">
                      <h4>Installation Summary</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <h5>Customer Information</h5>
                          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                          <p><strong>Contact:</strong> {formData.email} | {formData.mobile}</p>
                          <p><strong>Address:</strong> {formData.street}, {formData.city}, {formData.postcode}</p>
                        </div>
                        <div className="col-md-6">
                          <h5>Installation Details</h5>
                          <p><strong>Total PV Output:</strong> {results.installation.totalPVOutput} kWp</p>
                          <p><strong>Annual AC Output:</strong> {results.installation.annualACOutput} kWh</p>
                          <p><strong>Zone:</strong> {results.installation.zone}</p>
                        </div>
                      </div>
                      
                      <h5 className="mt-4">Roof Details</h5>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Roof</th>
                              <th>Type</th>
                              <th>Orientation</th>
                              <th>Slope</th>
                              <th>Shade Factor</th>
                              <th>PV Output</th>
                              <th>Annual Output</th>
                            </tr>
                          </thead>
                          <tbody>
                            {results.installation.results.map((roof: any, index: number) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{roof.type}</td>
                                <td>{roof.orientation}°</td>
                                <td>{roof.slope}°</td>
                                <td>{roof.shadeFactor}%</td>
                                <td>{roof.result.pvOutput} kWp</td>
                                <td>{roof.result.annualOutput} kWh</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-4">
                        <a 
                          href={results.pdfPath} 
                          target="_blank" 
                          className="btn btn-primary"
                        >
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="list-inline pull-right mt-3">
                    <li>
                      <button 
                        type="button" 
                        className="btn btn-default prev-step" 
                        onClick={prevStep}
                      >
                        Previous
                      </button>
                    </li>
                    <li>
                      <button 
                        type="button" 
                        className="btn btn-success" 
                        onClick={() => router.push('/')}
                      >
                        Finish
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
} 