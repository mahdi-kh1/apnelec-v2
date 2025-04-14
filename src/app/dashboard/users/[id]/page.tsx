"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import UserImageUpload from "@/components/user/UserImageUpload";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  mobile?: string | null;
  isAdmin: boolean;
  isActive: boolean;
}

export default function UserDetailPage() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id as string;
  
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userImage, setUserImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/admin/users/${userId}`);
        
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          toast.error("Failed to load user");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        toast.error("An error occurred while loading user data");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    
    setSaving(true);
    
    try {
      const formData = new FormData();
      formData.append("firstName", user.firstName || "");
      formData.append("lastName", user.lastName || "");
      formData.append("mobile", user.mobile || "");
      formData.append("isAdmin", user.isAdmin.toString());
      formData.append("isActive", user.isActive.toString());
      
      if (userImage) {
        formData.append("image", userImage);
      }
      
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "PUT",
        body: formData,
      });
      
      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        toast.success("User updated successfully");
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("An error occurred while updating the user");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-10">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Loading User...</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="animate-pulse space-y-4">
              <div className="h-32 w-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container py-10">
        <Card>
          <CardHeader>
            <CardTitle>User Not Found</CardTitle>
            <CardDescription>
              We couldn't find the user you're looking for.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/users">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Users
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Edit User</CardTitle>
              <CardDescription>
                Update user information and permissions
              </CardDescription>
            </div>
            <Link href="/dashboard/users">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <UserImageUpload
                  initialImage={user.image || undefined}
                  onImageChange={setUserImage}
                  size="lg"
                />
              </div>
              
              <div className="flex-grow space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={user.firstName || ""}
                      onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                      placeholder="First name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={user.lastName || ""}
                      onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                      placeholder="Last name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={user.email || ""}
                    disabled
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                  <p className="text-xs text-muted-foreground">
                    Email cannot be changed
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    value={user.mobile || ""}
                    onChange={(e) => setUser({ ...user, mobile: e.target.value })}
                    placeholder="Mobile number"
                  />
                </div>
                
                <div className="flex flex-col space-y-4 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="isAdmin" className="text-base">Admin Privileges</Label>
                      <p className="text-sm text-muted-foreground">
                        Grant administrative access to this user
                      </p>
                    </div>
                    <Switch
                      id="isAdmin"
                      checked={user.isAdmin}
                      onCheckedChange={(checked) => setUser({ ...user, isAdmin: checked })}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="isActive" className="text-base">Active Status</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable or disable this user account
                      </p>
                    </div>
                    <Switch
                      id="isActive"
                      checked={user.isActive}
                      onCheckedChange={(checked) => setUser({ ...user, isActive: checked })}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <CardFooter className="flex justify-end px-0 pt-4">
              <Button type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}