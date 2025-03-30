"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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
};

export default function FeaturedBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        const response = await fetch("/api/blogs?featured=true&limit=3");
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching featured blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  // Truncate content for previews
  const truncateContent = (content: string | null, maxLength: number = 120) => {
    if (!content) return "";
    if (content.length <= maxLength) return content;
    return `${content.substring(0, maxLength)}...`;
  };

  // Get blog image based on ID
  const getBlogImage = (id: number) => {
    // Use modulo to cycle through available images (assuming you have blog-1.jpg through blog-6.jpg)
    const imageIndex = (id % 6) + 1;
    return `/images/blog/blog-${imageIndex}.jpg`;
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <Skeleton className="w-full h-48" />
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <div className="flex items-center pt-4">
                <Skeleton className="h-10 w-10 rounded-full mr-3" />
                <div>
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32 mt-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Link 
            href={`/blog/${blog.id}`} 
            key={blog.id}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden h-full transition-all duration-200 hover:shadow-md">
              <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                <Image
                  src={getBlogImage(blog.id)}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {truncateContent(blog.content)}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                
                <div className="flex items-center pt-4">
                  <div className="flex-shrink-0 mr-3">
                    {blog.author.image ? (
                      <Image
                        src={blog.author.image}
                        alt={blog.author.name || "Author"}
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
                      {blog.author.name || "Anonymous"}
                    </p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300">
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
            Check back later for new content
          </p>
        </div>
      )}
    </div>
  );
} 