"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
  imagePath: string | null;
  excerpt: string | null;
};

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
  show: { opacity: 1, y: 0 }
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const query = searchParams?.get("q") || "";
  
  useEffect(() => {
    setSearchQuery(query);
    fetchBlogs(query);
  }, [query]);
  
  const fetchBlogs = async (searchTerm: string) => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('Fetching blogs with search term:', searchTerm);
      const response = await fetch(`/api/blogs${searchTerm ? `?q=${encodeURIComponent(searchTerm)}` : ""}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        },
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response not OK:', response.status, errorText);
        throw new Error(`Failed to fetch blogs: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Received data:', data);
      
      if (!Array.isArray(data)) {
        console.error('Invalid response format:', data);
        throw new Error('Invalid response format');
      }
      
      setBlogs(data);
      if (data.length === 0 && searchTerm) {
        setError(`No blogs found matching "${searchTerm}"`);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError(error instanceof Error ? error.message : "Failed to fetch blogs");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/Blog${searchQuery ? `?q=${searchQuery}` : ""}`);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };
  
  const truncateContent = (content: string | null, maxLength: number = 150) => {
    if (!content) return "";
    if (content.length <= maxLength) return content;
    return `${content.substring(0, maxLength)}...`;
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="max-w-xl mx-auto mb-8">
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSearch} className="max-w-xl mx-auto">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-12 h-12 text-lg"
          />
          <Button
            type="submit"
            variant="ghost"
            className="absolute right-0 top-0 h-full px-4 hover:bg-transparent"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </form>

      {error ? (
        <div className="text-center py-8">
          <p className="text-red-500 dark:text-red-400">{error}</p>
        </div>
      ) : blogs.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            No blog posts found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search terms
          </p>
        </motion.div>
      ) : (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div key={blog.id} variants={item}>
              <Link 
                href={`/Blog/${blog.id.toString()}`}
                className="group block"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <Image
                      src={blog.imagePath || process.env.DEFAULT_BLOG_IMAGE || '/about-apnelec.jpg'}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      priority={false}
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                      {truncateContent(blog.excerpt || blog.content)}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(blog.createdAt)}</span>
                      </div>
                      <span className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
} 