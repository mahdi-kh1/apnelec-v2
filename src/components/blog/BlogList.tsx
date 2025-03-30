"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import BlogImage from "./BlogImage";

// Define the Blog type
type Blog = {
  id: number;
  title: string;
  content: string | null;
  authorId: string;
  createdAt: string;
  author: {
    name: string | null;
    image?: string | null;
  };
  // Add any other fields your blog has
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const query = searchParams.get("q") || "";
  
  useEffect(() => {
    console.log("BlogList mounted, query:", query);
    setSearchQuery(query);
    fetchBlogs(query);
  }, [query]);
  
  const fetchBlogs = async (searchTerm: string) => {
    console.log("Fetching blogs with search term:", searchTerm);
    setIsLoading(true);
    try {
      const response = await fetch(`/api/blogs${searchTerm ? `?q=${searchTerm}` : ""}`);
      console.log("Blog API response status:", response.status);
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();
      console.log("Blogs fetched:", data.length);
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/blog${searchQuery ? `?q=${searchQuery}` : ""}`);
  };
  
  // Function to truncate content for previews
  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Search bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <form onSubmit={handleSearch} className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10 pr-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button 
            type="submit"
            className="absolute right-1 top-1 bottom-1"
          >
            Search
          </Button>
        </form>
      </div>
      
      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          // Loading skeletons
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex items-center">
                  <Skeleton className="h-4 w-24 mr-4" />
                </div>
              </div>
            </div>
          ))
        ) : blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link href={`/blog/${blog.id}`} key={blog.id}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full transition-transform hover:scale-[1.02] hover:shadow-lg">
                <BlogImage id={blog.id} title={blog.title} />
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {truncateContent(blog.content || "")}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(blog.createdAt)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center pt-4">
                    <div className="flex-shrink-0 mr-3">
                      {blog.author.image ? (
                        <Image
                          src={blog.author.image}
                          alt={blog.author.name || ""}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                          <User className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {blog.author.name}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No blog posts found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {query ? `No results for "${query}"` : "Check back later for new content"}
            </p>
          </div>
        )}
      </div>
    </>
  );
} 