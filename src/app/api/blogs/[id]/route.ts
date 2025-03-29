import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db"; // فایل Prisma
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // تنظیمات احراز هویت

// دریافت یک بلاگ خاص
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;  // استخراج id از params به صورت مستقیم

  const blogId = Number(id);

  if (isNaN(blogId)) {
    return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
  }

  try {
    const blog = await db.blog.findUnique({
      where: { id: blogId },
      include: { author: true },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// ویرایش بلاگ
export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = context.params;  // استخراج id از params به صورت مستقیم

  const blogId = Number(id);
  if (isNaN(blogId)) {
    return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
  }

  try {
    const { title, content } = await request.json();

    const updatedBlog = await db.blog.update({
      where: { id: blogId },
      data: { title, content },
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
  context: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = context.params;  // استخراج id از params به صورت مستقیم

  const blogId = Number(id);
  if (isNaN(blogId)) {
    return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
  }

  try {
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
