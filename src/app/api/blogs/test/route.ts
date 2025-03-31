import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    console.log('Testing blog creation...');
    
    // First, let's check if we already have a test blog
    const existingBlog = await db.blog.findFirst({
      where: {
        title: 'Test Blog Post'
      }
    });

    if (existingBlog) {
      return NextResponse.json({ message: 'Test blog already exists', blog: existingBlog });
    }

    // Create a test user if needed
    let testUser = await db.user.findFirst({
      where: {
        email: 'test@example.com'
      }
    });

    if (!testUser) {
      testUser = await db.user.create({
        data: {
          email: 'test@example.com',
          name: 'Test User',
          username: 'test@example.com',
        }
      });
    }

    // Create a test blog post
    const blog = await db.blog.create({
      data: {
        title: 'Test Blog Post',
        content: 'This is a test blog post content.',
        excerpt: 'Test excerpt',
        tags: 'test',
        readTime: 5,
        featured: true,
        published: true,
        authorId: testUser.id,
        imagePath: '/about-apnelec.jpg'
      }
    });

    console.log('Created test blog:', blog);

    return NextResponse.json({ message: 'Test blog created successfully', blog });
  } catch (error) {
    console.error('Error creating test blog:', error);
    return NextResponse.json(
      { error: 'Failed to create test blog' },
      { status: 500 }
    );
  }
} 