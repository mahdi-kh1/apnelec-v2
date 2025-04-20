"use client";
import BlogForm from "@/components/form/BlogForm";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditBlogPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const router = useRouter();
  const [blogs, setBlogs] = useState<{
    title: string;
    content: string;
    authorId: string;
  } | null>(null);

  useEffect(() => {
    if (!id) return;
    
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlogs();
  }, [id]);

  // اگر داده‌ها هنوز بارگذاری نشده باشند، نمایش لودر یا وضعیت دیگر
  if (!blogs) {
    return <div>Loading...</div>;
  }

  return (
    <BlogForm
      redirectToPage={true}
      redirectPath="/dashboard/blogs"
      blogId={id}
      existingData={blogs}
    />
  );
}
