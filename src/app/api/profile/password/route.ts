import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { hash, compare } from "bcrypt";

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const user = await db.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user?.password) {
      return new NextResponse("Invalid user", { status: 400 });
    }

    const passwordMatch = await compare(body.currentPassword, user.password);
    if (!passwordMatch) {
      return new NextResponse(
        JSON.stringify({ error: "Current password is incorrect" }),
        { status: 400 }
      );
    }

    const hashedPassword = await hash(body.newPassword, 10);
    await db.user.update({
      where: { id: session.user.id },
      data: { password: hashedPassword },
    });

    return new NextResponse("Password updated", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}