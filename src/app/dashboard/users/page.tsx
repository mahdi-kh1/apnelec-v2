"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import AdminRoute from "@/components/AdminRoute";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  mobile: string;
}

const UsersPageContent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Users</h1>
        <Button variant="default" onClick={() => router.push("/dashboard/users/new")}>
          Add New User
        </Button>
      </div>

      <div className="rounded-md border bg-white dark:bg-gray-800">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50 dark:bg-gray-900">
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">Name</th>
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">Email</th>
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">Mobile</th>
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b dark:border-gray-700">
                <td className="p-4 text-gray-900 dark:text-gray-300">{`${user.firstName} ${user.lastName}`}</td>
                <td className="p-4 text-gray-900 dark:text-gray-300">{user.username}</td>
                <td className="p-4 text-gray-900 dark:text-gray-300">{user.mobile}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => router.push(`/dashboard/users/${user.id}`)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function UsersPage() {
  return (
    <AdminRoute>
      <UsersPageContent />
    </AdminRoute>
  );
}