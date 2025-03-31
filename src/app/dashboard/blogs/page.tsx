"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  FileText, 
  Pencil, 
  Trash2, 
  Search, 
  Plus, 
  MoreHorizontal,
  SlidersHorizontal,
  ArrowUpDown,
  Calendar,
  User,
  Filter,
  EyeIcon,
  X,
  Check
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Blog {
  id: number;
  createdAt: string;
  title: string;
  excerpt?: string | null;
  imagePath?: string | null;
  tags?: string | null;
  published?: boolean;
  featured?: boolean;
  author: {
    name?: string | null;
    image?: string | null;
  };
  authorId: string;
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

export default function BlogPageContent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<Blog | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFiltering, setIsFiltering] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/blogs");
      
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      
      const data = await response.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to load blogs");
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setDeleteLoading(true);

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("Blog deleted successfully");
        setBlogs(blogs.filter(blog => blog.id !== id));
        setOpen(false);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to delete blog");
      }
    } catch (error) {
      toast.error("Failed to delete blog");
      console.error(error);
    } finally {
      setDeleteLoading(false);
      setBlogToDelete(null);
    }
  };

  const confirmDelete = (blog: Blog) => {
    setOpen(true);
    setBlogToDelete(blog);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleFilter = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    // Apply search filter
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply tag filter if active
    if (activeFilter && blog.tags) {
      return matchesSearch && blog.tags.toLowerCase().includes(activeFilter.toLowerCase());
    }
    
    return matchesSearch;
  });

  // Extract unique tags for filter options
  const allTags = blogs
    .filter(blog => blog.tags)
    .flatMap(blog => blog.tags?.split(',').map(tag => tag.trim()))
    .filter((tag, index, self) => tag && self.indexOf(tag) === index) as string[];

  const formatDate = (dateString: string) => {
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
          <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
          <p className="text-muted-foreground mt-1">Manage your blog posts and content</p>
        </div>
        <Button
          variant="default"
          onClick={() => router.push("/dashboard/blogs/new")}
          className="self-start md:self-auto"
        >
          <Plus className="w-4 h-4 mr-2" /> Add New Blog
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
            placeholder="Search blogs..."
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
            onClick={() => setIsFiltering(!isFiltering)}
            className={isFiltering ? "bg-primary/10 border-primary/50 text-primary" : ""}
          >
            <Filter className="w-4 h-4 mr-2" /> Filter
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

      {/* Tag filters */}
      {isFiltering && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-wrap gap-2"
        >
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleFilter(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeFilter === tag
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 hover:bg-red-200 text-red-800 dark:bg-red-900/30 dark:hover:bg-red-900/50 dark:text-red-400 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </motion.div>
      )}

      {/* Loading state */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm animate-pulse">
              <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
              <div className="flex items-center justify-between">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-8"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-10">
              <FileText className="w-12 h-12 text-gray-400 mb-4 mx-auto" />
              <h3 className="text-lg font-medium mb-2">No blogs found</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery ? `No results for "${searchQuery}"` : "Get started by creating your first blog post"}
              </p>
              <Button
                variant="default"
                onClick={() => router.push("/dashboard/blogs/new")}
              >
                <Plus className="w-4 h-4 mr-2" /> Create Blog Post
              </Button>
            </div>
          ) : viewMode === "grid" ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredBlogs.map((blog) => (
                <motion.div key={blog.id} variants={item}>
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow border-gray-200 dark:border-gray-700">
                    <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
                      {blog.imagePath ? (
                        <Image
                          src={blog.imagePath}
                          alt={blog.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                      {blog.featured && (
                        <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                          Featured
                        </div>
                      )}
                      {blog.published !== undefined && (
                        <div className={`absolute top-2 right-2 ${blog.published ? "bg-green-500" : "bg-gray-500"} text-white px-2 py-1 rounded-md text-xs font-medium`}>
                          {blog.published ? "Published" : "Draft"}
                        </div>
                      )}
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <CardTitle className="line-clamp-2 text-lg">{blog.title}</CardTitle>
                      {blog.excerpt && (
                        <CardDescription className="line-clamp-2 mt-2">
                          {blog.excerpt}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="p-4 pt-3 flex-grow">
                      {blog.tags && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {blog.tags.split(',').map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs">
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(blog.createdAt)}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                          {blog.author && blog.author.image ? (
                            <Image
                              src={blog.author.image}
                              alt={blog.author.name || "Author"}
                              width={24}
                              height={24}
                              className="object-cover"
                            />
                          ) : (
                            <User className="w-3 h-3 text-gray-500" />
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {blog.author?.name || blog.authorId}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => router.push(`/dashboard/blogs/${blog.id}`)}
                          className="h-8 w-8 p-0 rounded-full"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => confirmDelete(blog)}
                          className="h-8 w-8 p-0 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
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
                          Title
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Author</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Created</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBlogs.map((blog) => (
                      <motion.tr
                        key={blog.id}
                        variants={item}
                        className="border-b last:border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/20"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                              {blog.imagePath ? (
                                <Image
                                  src={blog.imagePath}
                                  alt={blog.title}
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              ) : (
                                <FileText className="w-5 h-5 text-gray-500" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white line-clamp-1">{blog.title}</p>
                              {blog.tags && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {blog.tags.split(',').slice(0, 2).map((tag, i) => (
                                    <span key={i} className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
                                      {tag.trim()}
                                    </span>
                                  ))}
                                  {blog.tags.split(',').length > 2 && (
                                    <span className="text-xs text-muted-foreground">+{blog.tags.split(',').length - 2} more</span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                              {blog.author && blog.author.image ? (
                                <Image
                                  src={blog.author.image}
                                  alt={blog.author.name || "Author"}
                                  width={24}
                                  height={24}
                                  className="object-cover"
                                />
                              ) : (
                                <User className="w-3 h-3 text-gray-500" />
                              )}
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {blog.author?.name || blog.authorId}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            {blog.featured && (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            )}
                            {blog.published !== undefined && (
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${blog.published 
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"}`}
                              >
                                {blog.published ? "Published" : "Draft"}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                          {formatDate(blog.createdAt)}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => router.push(`/dashboard/blogs/${blog.id}`)}
                              className="h-8 w-8 p-0 rounded-full"
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => confirmDelete(blog)}
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
              Delete Blog Post
            </Dialog.Title>
            <Dialog.Description className="text-muted-foreground text-sm mb-4">
              Are you sure you want to delete "{blogToDelete?.title}"? This action cannot be undone.
            </Dialog.Description>
            <div className="flex justify-end gap-3 mt-6">
              <Dialog.Close asChild>
                <Button variant="outline" disabled={deleteLoading}>
                  Cancel
                </Button>
              </Dialog.Close>
              <Button
                variant="destructive"
                onClick={(e) => blogToDelete && handleDelete(e, blogToDelete.id)}
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
}
