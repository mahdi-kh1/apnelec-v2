import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // فرض بر این که مسیر دیتابیس اینجاست
import * as z from "zod";

const blogPostSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(255, "Title must not exceed 255 characters"),
  content: z.string().optional(),
  authorId: z.string().min(1, "Author is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, content, authorId } = blogPostSchema.parse(body);

    const existingAuthor = await db.user.findUnique({
      where: { id: authorId },
    });

    if (!existingAuthor) {
      return NextResponse.json({ message: "Author not found" }, { status: 404 });
    }

    // ایجاد پست جدید
    const newPost = await db.blog.create({
      data: {
        title,
        content,
        authorId,
      },
    });

    return NextResponse.json({ post: newPost, message: "Blog post created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
