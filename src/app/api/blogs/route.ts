import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";

// Define Blog interface
interface Blog {
  id: number;
  title: string;
  content: string | null;
  excerpt: string | null;
  tags: string | null;
  imagePath: string | null;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  readTime: number;
  featured: boolean;
  published: boolean;
  author?: {
    id: string;
    name: string | null;
    image: string | null;
  };
}

// Ensure upload directory exists
async function ensureDirectoryExists(dirPath: string) {
  try {
    await fs.access(dirPath);
  } catch (error) {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Handle form data for file uploads
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const tags = formData.get("tags") as string;
    const readTime = parseInt(formData.get("readTime") as string) || 5;
    const featured = formData.get("featured") === "true";
    const published = formData.get("published") === "true";
    
    // Handle image upload
    const imageFile = formData.get("image") as File;
    let imagePath = null;
    
    if (imageFile && imageFile.size > 0) {
      const fileExtension = imageFile.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExtension}`;
      const filePath = `/uploads/blog/${fileName}`;
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      
      // Ensure directory exists
      const uploadDir = path.join(process.cwd(), 'public/uploads/blog');
      await ensureDirectoryExists(uploadDir);
      
      await writeFile(path.join(process.cwd(), 'public', filePath), buffer);
      
      imagePath = filePath;
    }
    
    // Get user ID from session
    const userId = session.user.id;
    
    // Create blog post
    const blog = await db.blog.create({
      data: {
        title,
        content,
        excerpt,
        tags,
        readTime,
        featured,
        published,
        imagePath,
        authorId: userId,
      },
    });
    
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    console.log('Starting blog fetch request...');
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q") || "";
    const featured = searchParams.get("featured") === "true";
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : undefined;
    
    console.log('Query parameters:', { query, featured, limit });

    // Test database connection
    try {
      await db.$queryRaw`SELECT 1`;
      console.log('Database connection successful');
    } catch (dbError) {
      console.error('Database connection failed:', dbError);
      throw new Error('Database connection failed');
    }

    // Log the query we're about to make
    console.log('Executing query with conditions:', {
      titleSearch: { contains: query, mode: "insensitive" },
      published: true,
      featured: featured ? true : undefined
    });
    
    const blogs = await db.blog.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
          { tags: { contains: query, mode: "insensitive" } },
        ],
        published: true,
        ...(featured ? { featured: true } : {}),
      },
      orderBy: {
        createdAt: "desc"
      },
      take: limit,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
    
    console.log('Raw database response:', blogs);
    console.log(`Found ${blogs.length} blogs`);
    
    if (blogs.length === 0) {
      // Let's check if there are any blogs at all without filters
      const totalBlogs = await db.blog.count();
      console.log('Total blogs in database:', totalBlogs);
      
      const publishedBlogs = await db.blog.count({
        where: { published: true }
      });
      console.log('Total published blogs:', publishedBlogs);
      
      if (featured) {
        const featuredBlogs = await db.blog.count({
          where: { published: true, featured: true }
        });
        console.log('Total featured & published blogs:', featuredBlogs);
      }
    }
    
    // Transform the response to ensure imagePath is always set
    const transformedBlogs = blogs.map((blog: any) => ({
      ...blog,
      imagePath: blog.imagePath || '/about-apnelec.jpg'
    }));
    
    console.log('Sending response with transformed blogs');
    return NextResponse.json(transformedBlogs, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      }
    });
  } catch (error) {
    console.error("Error in blogs GET endpoint:", error);
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack
      });
    }
    return NextResponse.json(
      { error: "Failed to fetch blogs. Please try again later." },
      { status: 500 }
    );
  }
}
