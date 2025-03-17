import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
    mobile: z.string()
        .min(1, 'Mobile is required')
        .regex(/^\d{12}$/, 'Mobile must be a valid 12-digit number, Enter Country Code and Mobile Number without + sign'),
    username: z.string()
        .min(1, 'Email is required')
        .email('Invalid email'),
    password: z.string()
        .min(1, 'Password is required')
        .min(8, 'Password must have more than 8 characters'),
    firstName: z.string()
        .min(1, 'First name is required'),
    lastName: z.string()
        .min(1, 'Last name is required'),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { mobile, username, password, firstName, lastName } = userSchema.parse(body);

        const existingusername = await db.user.findUnique({
            where: { username: username }
        });
        if (existingusername) {
            return NextResponse.json({ user: null, message: "User with this Email already exists" }, { status: 409 });
        }

        const existingMobile = await db.user.findUnique({
            where: { mobile: mobile }
        });
        if (existingMobile) {
            return NextResponse.json({ user: null, message: "User with this Mobile already exists" }, { status: 409 });
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                mobile,
                username,
                password: hashedPassword,
                firstName: firstName,
                lastName: lastName
            }
        });
        const { password: _, ...rest } = newUser;

        return NextResponse.json({ user: rest, message: "User created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong, contact MAHDI (mikhodaee@gmail.com)" }, { status: 500 });
    }
}