"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";

interface Blog {
  id: string;
  createdAt: string;
  title: string;
  author: string;
}

export default function BlogPageContent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/api/Blogs/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("User deleted successfully");
        setOpen(false); // بستن دیالوگ بعد از حذف موفق
        router.push("/dashboard/blogs");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to delete blog");
      }
    } catch (error) {
      toast.error("Failed to delete blog");
      console.error(error);
    } finally {
      setLoading(false);
      fetchBlogs();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <Button
          variant="default"
          onClick={() => router.push("/dashboard/blogs/new")}
        >
          Add New Blog
        </Button>
      </div>

      <div className="rounded-md border bg-white dark:bg-gray-800 relative">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50 dark:bg-gray-900">
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">
                Title
              </th>
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">
                Author
              </th>
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">
                Created At
              </th>
              <th className="p-4 text-left text-gray-500 dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b dark:border-gray-700">
                <td className="p-4 text-gray-900 dark:text-gray-300">
                  {blog.title}
                </td>
                <td className="p-4 text-gray-900 dark:text-gray-300">
                  {blog.author}
                </td>
                <td className="p-4 text-gray-900 dark:text-gray-300">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => router.push(`/dashboard/blogs/${blog.id}`)}
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
                            Are you sure to delete {`${blog.title}`}
                          </Dialog.Title>
                          <Dialog.Description className="mt-2 text-gray-500">
                            This action is irreversible. Do you want to delete
                            this blog?
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
                              onClick={(e) => handleDelete(e, blog.id)}
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
}
