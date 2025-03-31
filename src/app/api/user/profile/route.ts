import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const formData = await req.formData();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const mobile = formData.get("mobile") as string;
    
    // Combine first and last name for the name field
    const name = `${firstName} ${lastName}`.trim();
    
    // Handle image upload
    const imageFile = formData.get("image") as File;
    let imagePath = null;
    
    if (imageFile && imageFile.size > 0) {
      const fileExtension = imageFile.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExtension}`;
      const filePath = `/uploads/users/${fileName}`;
      
      // Read file as buffer
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      
      // Optimize image with sharp
      const optimizedBuffer = await sharp(buffer)
        .resize(200, 200, { fit: 'cover' })
        .jpeg({ quality: 80 })
        .toBuffer();
      
      // Save optimized image
      await writeFile(path.join(process.cwd(), 'public', filePath), optimizedBuffer);
      
      imagePath = filePath;
    }
    
    // Update user profile
    const updateData: any = {
      firstName,
      lastName,
      name,
      mobile,
    };
    
    // Only update image if a new one was uploaded
    if (imagePath) {
      updateData.image = imagePath;
    }
    
    const updatedUser = await db.user.update({
      where: { id: session.user.id },
      data: updateData,
    });
    
    return NextResponse.json({
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        image: updatedUser.image,
      },
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
} 