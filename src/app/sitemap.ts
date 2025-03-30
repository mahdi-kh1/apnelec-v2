import { MetadataRoute } from 'next';
import { db } from '@/lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // Get all blog posts
  const blogs = await db.blog.findMany({
    select: {
      id: true,
      updatedAt: true,
    },
  });

  const blogEntries = blogs.map((blog) => ({
    url: `${siteUrl}/blog/${blog.id}`,
    lastModified: blog.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Static pages
  const routes = [
    '',
    '/blog',
    '/about',
    '/contact',
    // Add other static routes
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes, ...blogEntries];
} 