import { Metadata } from "next";
import { Suspense } from "react";
import BlogList from "@/components/blog/BlogList";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Blog | Your Brand",
  description: "Discover the latest insights, tutorials, and updates from our team",
  openGraph: {
    title: "Blog | Your Brand",
    description: "Discover the latest insights, tutorials, and updates from our team",
    images: [{ url: "/images/og-blog.jpg" }],
  },
  alternates: {
    canonical: "/blog",
  },
};

function BlogSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Our Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover insights, tutorials, and updates about solar energy and electrical services
        </p>
      </div>
      
      <Suspense fallback={<BlogSkeleton />}>
        <BlogList />
      </Suspense>
    </div>
  );
}
