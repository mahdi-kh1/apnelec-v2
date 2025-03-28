"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";
import AdminRoute from "@/components/AdminRoute";
import { set } from "zod";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  mobile: string;
}

const UsersPageContent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const fetchUsers = async () => {
    try {
      console.log("Fetching users...");
      const response = await fetch("/api/users");
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error(errorData.error || "Failed to fetch users");
      }
      
      const data = await response.json();
      console.log("Received users data:", data);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("User deleted successfully");
        setOpen(false); // بستن دیالوگ بعد از حذف موفق
        router.push("/dashboard/users");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to delete user");
      }
    } catch (error) {
      toast.error("Failed to delete user");
      console.error(error);
    } finally {
      setLoading(false);
      fetchUsers();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Users</h1>
        <Button
          variant="default"
          onClick={() => router.push("/dashboard/users/new")}
        >
          Add New User
        </Button>
      </div>

      <div className="rounded-md border bg-white dark:bg-gray-800 relative">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50 dark:bg-gray-900">
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">
                Name
              </th>
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">
                Email
              </th>
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">
                Mobile
              </th>
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b dark:border-gray-700">
                <td className="p-4 text-gray-900 dark:text-gray-300">{`${user.firstName} ${user.lastName}`}</td>
                <td className="p-4 text-gray-900 dark:text-gray-300">
                  {user.username}
                </td>
                <td className="p-4 text-gray-900 dark:text-gray-300">
                  {user.mobile}
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => router.push(`/dashboard/users/${user.id}`)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Dialog.Root open={open} onOpenChange={setOpen}>
                      <Dialog.Trigger asChild>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                        <Dialog.Content className="w-1/2 h-fit fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                          <Dialog.Title className="text-lg text-gray-950 dark:text-white font-semibold">
                            Are you sure to delete{" "}
                            {`${user.firstName} ${user.lastName}`}?
                          </Dialog.Title>
                          <Dialog.Description className="mt-2 text-gray-500">
                            This action is irreversible. Do you want to delete
                            this user?
                          </Dialog.Description>
                          <div className="mt-4 flex justify-end gap-2">
                            <Dialog.Close asChild>
                              <Button
                                className="text-gray-950 dark:text-white"
                                variant="outline"
                                disabled={loading}
                              >
                                Cancel
                              </Button>
                            </Dialog.Close>
                            <Button
                              variant="destructive"
                              onClick={(e) => handleDelete(e, user.id)}
                              disabled={loading}
                            >
                              {loading ? "Deleting..." : "Delete"}
                            </Button>
                          </div>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
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
