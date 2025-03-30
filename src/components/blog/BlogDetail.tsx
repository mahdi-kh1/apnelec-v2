"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";

// Define the Blog type with proper relations
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

export default function BlogDetail({ id }: { id: string }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    if (!id) return;
    
    const fetchBlog = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/blogs/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog post not found");
          }
          throw new Error("Failed to fetch blog post");
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching blog:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlog();
  }, [id]);
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };
  
  // Share functionality
  const shareBlog = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title || "Blog post",
        text: `Check out this blog post: ${blog?.title}`,
        url: window.location.href,
      })
      .catch((err) => console.error("Error sharing:", err));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => router.back()}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to blogs
          </Button>
        </div>
        
        <div className="space-y-6">
          <Skeleton className="h-12 w-3/4" />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="ml-4 space-y-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-8 w-20" />
          </div>
          <Skeleton className="h-96 w-full rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => router.back()}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to blogs
          </Button>
        </div>
        
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {error}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We&apos;re sorry, we couldn&apos;t find that blog post.
          </p>
          <Link href="/blog">
            <Button>
              Browse all blogs
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  if (!blog) return null;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blogs
        </Button>
      </div>
      
      <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              {blog.author.image ? (
                <Image
                  src={blog.author.image}
                  alt={blog.author.name || ""}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {blog.author.name || "Unknown Author"}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={shareBlog}
              className="flex items-center"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
          
          <div className="relative h-96 mb-8 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
            <Image
              src={`https://source.unsplash.com/random/1200x800?sig=${blog.id}`}
              alt={blog.title || "Blog Image"}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Render content - if it's HTML, use dangerouslySetInnerHTML */}
            {blog.content?.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
} 