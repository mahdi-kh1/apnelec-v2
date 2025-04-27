"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

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
  imagePath?: string | null;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function FeaturedBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        const response = await fetch("/api/blogs?featured=true&limit=3", {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
          },
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.status}`);
        }
        
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format');
        }
        
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
    return new Intl.DateTimeFormat("en-GB", {
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

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
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
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600 dark:text-gray-400">No featured blog posts available.</p>
        <Link 
          href="/Blog" 
          className="inline-flex items-center px-6 py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300 transform hover:-translate-y-1"
        >
          Browse all posts
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {blogs.map((blog) => (
        <motion.div key={blog.id} variants={item} className="h-full">
          <Link 
            href={`/Blog/${blog.id.toString()}`}
            className="group block h-full"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <Image
                  src={blog.imagePath || '/about-apnelec.jpg'}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={false}
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {truncateContent(blog.content)}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(blog.createdAt)}</span>
                  </div>
                  <span className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400">
                    Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
      
      <motion.div variants={item} className="md:col-span-3 flex justify-center mt-8">
        <Link 
          href="/Blog" 
          className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
        >
          View all posts
          <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </motion.div>
  );
} 