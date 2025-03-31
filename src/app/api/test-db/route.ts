import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Test basic connection
    await db.$queryRaw`SELECT 1`;
    console.log("Database connection test successful");

    // Test user table
    const userCount = await db.user.count();
    console.log(`Total users in database: ${userCount}`);

    // Test blog table
    const blogCount = await db.blog.count();
    console.log(`Total blogs in database: ${blogCount}`);

    return NextResponse.json({
      status: "success",
      message: "Database connection successful",
      counts: {
        users: userCount,
        blogs: blogCount
      }
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({
      status: "error",
      message: error instanceof Error ? error.message : "Database connection failed",
      error: error
    }, { status: 500 });
  }
} 