import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db"; // فایل Prisma
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // تنظیمات احراز هویت
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs/promises";

// Ensure upload directory exists
async function ensureDirectoryExists(dirPath: string) {
  try {
    await fs.access(dirPath);
  } catch (error) {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

// دریافت یک بلاگ خاص
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const blogId = parseInt(id, 10);
    
    if (isNaN(blogId)) {
      return NextResponse.json(
        { error: "Invalid blog ID" },
        { status: 400 }
      );
    }
    
    const blog = await db.blog.findUnique({
      where: { id: blogId },
      include: { author: true },
    });
    
    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ویرایش بلاگ
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const blogId = Number(id);
    
    if (isNaN(blogId)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    // Handle form data for file uploads
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const tags = formData.get("tags") as string;
    const readTime = parseInt(formData.get("readTime") as string) || 5;
    const featured = formData.get("featured") === "true";
    const published = formData.get("published") === "true";
    
    // Handle image upload
    const imageFile = formData.get("image") as File;
    let imagePath = undefined; // undefined means don't update
    
    if (imageFile && imageFile.size > 0) {
      const fileExtension = imageFile.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExtension}`;
      const uploadDir = path.join(process.cwd(), 'public/uploads/blog');
      const filePath = `/uploads/blog/${fileName}`;
      
      // Ensure directory exists
      await ensureDirectoryExists(uploadDir);
      
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      await writeFile(path.join(process.cwd(), 'public', filePath), buffer);
      
      imagePath = filePath;
    }
    
    // Update data object
    const updateData: any = {
      title,
      content,
      excerpt,
      tags,
      readTime,
      featured,
      published,
    };
    
    // Only include imagePath if a new image was uploaded
    if (imagePath) {
      updateData.imagePath = imagePath;
    }

    const updatedBlog = await db.blog.update({
      where: { id: blogId },
      data: updateData,
    });

    return NextResponse.json(updatedBlog);
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    console.error("Database error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// حذف بلاگ
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;

    const blogId = Number(id);
    if (isNaN(blogId)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    await db.blog.delete({ where: { id: blogId } });
    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    console.error("Database error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
