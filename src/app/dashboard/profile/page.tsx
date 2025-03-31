"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "react-hot-toast";
import type { UserProfile, UpdateUserProfile } from "@/types/next-auth";
import PasswordForm from "@/components/form/PasswordForm";

interface ExtendedSession {
    user: {
        id: string;
        username: string;
        name: string;
        mobile: string;
        firstName: string;
        lastName: string;
        isAdmin: boolean;
        email?: string | null;
        image?: string | null;
    };
}

export default function ProfilePage() {
    const { data: session, update } = useSession();
    const user = (session as ExtendedSession | null)?.user;
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState<Partial<UpdateUserProfile>>({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        mobile: user?.mobile || '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileData),
            });

            if (response.ok) {
                await update();
                toast.success('Profile updated successfully');
                setIsEditing(false);
            } else {
                toast.error('Failed to update profile');
            }
        } catch (error) {
            toast.error('Failed to update profile');
            console.error(error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <Button
                        variant="outline"
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                value={profileData.firstName}
                                disabled={!isEditing}
                                onChange={(e) =>
                                    setProfileData((prev) => ({ ...prev, firstName: e.target.value }))
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                value={profileData.lastName}
                                disabled={!isEditing}
                                onChange={(e) =>
                                    setProfileData((prev) => ({ ...prev, lastName: e.target.value }))
                                }
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={user?.username || ''}
                            readOnly
                            className="bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="mobile">Mobile</Label>
                        <Input
                            id="mobile"
                            value={profileData.mobile}
                            disabled={!isEditing}
                            onChange={(e) =>
                                setProfileData((prev) => ({ ...prev, mobile: e.target.value }))
                            }
                        />
                    </div>
                    {isEditing && (
                        <div className="flex justify-end">
                            <Button type="submit">Save Changes</Button>
                        </div>
                    )}
                </form>
                
                <PasswordForm isProfile={true} />
            </div>
        </div>
    );
}