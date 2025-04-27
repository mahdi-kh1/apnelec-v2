import { Metadata } from "next";
import BlogDetail from "@/components/blog/BlogDetail";

type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// This function generates metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(await params.then(p => p.id));
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/blogs/${id}`);
    const blog = await response.json();
    
    if (!blog) {
      return {
        title: 'Blog Post Not Found',
      };
    }
    
    return {
      title: `${blog.title} | APN Elec Blog`,
      description: blog.content?.substring(0, 160) || 'Read our latest blog post',
      openGraph: {
        title: blog.title,
        description: blog.content?.substring(0, 160) || 'Read our latest blog post',
        type: 'article',
        publishedTime: blog.createdAt,
        authors: [blog.author?.name || 'APN Elec'],
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post | APN Elec',
    };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const id = parseInt((await params).id);
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <BlogDetail id={id.toString()} />
    </div>
  );
} 