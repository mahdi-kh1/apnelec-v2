import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function PUT(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await request.json();
        const user = await db.user.update({
            where: { id: session.user.id },
            data: {
                firstName: body.firstName,
                lastName: body.lastName,
                mobile: body.mobile,
                // username/email is intentionally omitted to prevent updates
            }
        });

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}