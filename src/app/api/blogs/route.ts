import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // مطمئن شو که مسیر درست است

export async function GET() {
  try {
    const blogs = await db.blog.findMany({
      include: {
        author: { select: { name: true } }, // گرفتن نام نویسنده
      },
      orderBy: { createdAt: "desc" }, // مرتب‌سازی از جدیدترین به قدیمی‌ترین
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
