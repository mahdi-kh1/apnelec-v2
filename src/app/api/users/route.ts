import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            console.log("No session found - unauthorized");
            return new NextResponse("Unauthorized", { status: 401 });
        }

        console.log("Fetching users from database...");
        const users = await prisma.user.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                username: true,
                mobile: true,
            }
        });
        console.log(`Found ${users.length} users`);

        return NextResponse.json(users);
    } catch (error) {
        console.error("Error in GET /api/users:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}