"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Users, 
  Pencil, 
  Trash2, 
  Search, 
  Plus, 
  Filter,
  SlidersHorizontal,
  UserCircle,
  MoreHorizontal,
  ArrowUpDown,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  X
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";

import AdminRoute from "@/components/AdminRoute";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  mobile: string;
  isAdmin?: boolean;
  createdAt?: string;
  image?: string | null;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const UsersPageContent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeFilter, setActiveFilter] = useState<"admin" | "standard" | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
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
      toast.error("Failed to load users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setDeleteLoading(true);

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("User deleted successfully");
        setUsers(users.filter(user => user.id !== id));
        setOpen(false);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to delete user");
      }
    } catch (error) {
      toast.error("Failed to delete user");
      console.error(error);
    } finally {
      setDeleteLoading(false);
      setUserToDelete(null);
    }
  };

  const confirmDelete = (user: User) => {
    setOpen(true);
    setUserToDelete(user);
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleFilter = (filter: "admin" | "standard") => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };

  const filteredUsers = users.filter(user => {
    // Apply search filter
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    const matchesSearch = fullName.includes(searchQuery.toLowerCase()) || 
                          user.username.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply role filter if active
    if (activeFilter === "admin") {
      return matchesSearch && user.isAdmin === true;
    } else if (activeFilter === "standard") {
      return matchesSearch && !user.isAdmin;
    }
    
    return matchesSearch;
  });

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground mt-1">Manage your system users and permissions</p>
        </div>
        <Button
          variant="default"
          onClick={() => router.push("/dashboard/users/new")}
          className="self-start md:self-auto"
        >
          <Plus className="w-4 h-4 mr-2" /> Add New User
        </Button>
      </motion.div>

      {/* Filters and search */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => toggleFilter("admin")}
            className={activeFilter === "admin" ? "bg-primary/10 border-primary/50 text-primary" : ""}
          >
            <CheckCircle className="w-4 h-4 mr-2" /> Admins
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => toggleFilter("standard")}
            className={activeFilter === "standard" ? "bg-primary/10 border-primary/50 text-primary" : ""}
          >
            <UserCircle className="w-4 h-4 mr-2" /> Standard
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            {viewMode === "grid" ? "List View" : "Grid View"}
          </Button>
        </div>
      </motion.div>

      {/* Loading state */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm animate-pulse">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {filteredUsers.length === 0 ? (
            <div className="text-center py-10">
              <Users className="w-12 h-12 text-gray-400 mb-4 mx-auto" />
              <h3 className="text-lg font-medium mb-2">No users found</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery ? `No results for "${searchQuery}"` : "Get started by adding your first user"}
              </p>
              <Button
                variant="default"
                onClick={() => router.push("/dashboard/users/new")}
              >
                <Plus className="w-4 h-4 mr-2" /> Add New User
              </Button>
            </div>
          ) : viewMode === "grid" ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredUsers.map((user) => (
                <motion.div key={user.id} variants={item}>
                  <Card className="hover:shadow-md transition-shadow border-gray-200 dark:border-gray-700">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            {user.image ? (
                              <Image
                                src={user.image}
                                alt={`${user.firstName} ${user.lastName}`}
                                width={48}
                                height={48}
                                className="rounded-full bg-gray-200 dark:bg-gray-700 object-cover"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                <UserCircle className="w-6 h-6 text-primary" />
                              </div>
                            )}
                            {user.isAdmin && (
                              <div className="absolute -right-1 -top-1 bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm">
                                A
                              </div>
                            )}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{`${user.firstName} ${user.lastName}`}</CardTitle>
                            <CardDescription className="flex items-center gap-1">
                              <Mail className="w-3 h-3" /> {user.username}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => router.push(`/dashboard/users/${user.id}`)}
                              className="h-8 w-8 p-0 rounded-full"
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => confirmDelete(user)}
                              className="h-8 w-8 p-0 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-3 h-3 text-muted-foreground" />
                          <span>{user.mobile || "No phone number"}</span>
                        </div>
                        {user.createdAt && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Joined {formatDate(user.createdAt)}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.isAdmin 
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" 
                            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                        }`}>
                          {user.isAdmin ? "Admin" : "Standard User"}
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          User
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Email</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Phone</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Role</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <motion.tr
                        key={user.id}
                        variants={item}
                        className="border-b last:border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/20"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {user.image ? (
                                <Image
                                  src={user.image}
                                  alt={`${user.firstName} ${user.lastName}`}
                                  width={36}
                                  height={36}
                                  className="rounded-full bg-gray-200 dark:bg-gray-700 object-cover"
                                />
                              ) : (
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                  <UserCircle className="w-5 h-5 text-primary" />
                                </div>
                              )}
                              {user.isAdmin && (
                                <div className="absolute -right-1 -top-1 bg-blue-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold shadow-sm">
                                  A
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">{`${user.firstName} ${user.lastName}`}</p>
                              {user.createdAt && (
                                <p className="text-xs text-muted-foreground">Joined {formatDate(user.createdAt)}</p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 text-muted-foreground" />
                            <span className="text-sm">{user.username}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-muted-foreground" />
                            <span className="text-sm">{user.mobile || "No phone number"}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.isAdmin 
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" 
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                          }`}>
                            {user.isAdmin ? "Admin" : "Standard User"}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => router.push(`/dashboard/users/${user.id}`)}
                              className="h-8 w-8 p-0 rounded-full"
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => confirmDelete(user)}
                              className="h-8 w-8 p-0 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </>
      )}

      {/* Delete confirmation dialog */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-50">
            <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Delete User
            </Dialog.Title>
            <Dialog.Description className="text-muted-foreground text-sm mb-4">
              Are you sure you want to delete {userToDelete && `${userToDelete.firstName} ${userToDelete.lastName}`}? This action cannot be undone.
            </Dialog.Description>
            <div className="flex justify-end gap-3 mt-6">
              <Dialog.Close asChild>
                <Button variant="outline" disabled={deleteLoading}>
                  Cancel
                </Button>
              </Dialog.Close>
              <Button
                variant="destructive"
                onClick={(e) => userToDelete && handleDelete(e, userToDelete.id)}
                disabled={deleteLoading}
              >
                {deleteLoading ? (
                  <>
                    <span className="animate-spin mr-2">◌</span> Deleting...
                  </>
                ) : (
                  <>Delete</>
                )}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
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
