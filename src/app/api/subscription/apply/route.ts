import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import fs from 'fs';
import path from 'path';
import { writeFile } from 'fs/promises';
import sharp from 'sharp'; // Add sharp for image optimization

// Function to validate if file is an image
function isValidImage(file: File): boolean {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/jpg'];
  return validTypes.includes(file.type);
}

// Function to get output format based on image type
function getOutputFormat(fileType: string): 'jpeg' | 'png' | 'webp' {
  if (fileType === 'image/png') return 'png';
  if (fileType === 'image/webp') return 'webp';
  return 'jpeg'; // Default to jpeg for jpg and other formats
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const formData = await request.formData();
    
    // Get form fields
    const subscriptionType = formData.get('subscriptionType') as string;
    const receiptCode = formData.get('receiptCode') as string;
    const notes = formData.get('notes') as string;
    
    // Handle file uploads
    const brandPhoto = formData.get('brandPhoto') as File;
    const receiptPhoto = formData.get('receiptPhoto') as File;
    
    if (!receiptPhoto) {
      return NextResponse.json({ error: 'Receipt photo is required' }, { status: 400 });
    }
    
    // Validate receipt photo
    if (!isValidImage(receiptPhoto)) {
      return NextResponse.json({ 
        error: 'Invalid receipt photo format. Please upload a JPEG, PNG, or WebP image.' 
      }, { status: 400 });
    }
    
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public/uploads');
    const subscriptionUploadsDir = path.join(uploadsDir, 'subscription-applications');
    const brandsUploadsDir = path.join(uploadsDir, 'brands');
    
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    
    if (!fs.existsSync(subscriptionUploadsDir)) {
      fs.mkdirSync(subscriptionUploadsDir, { recursive: true });
    }
    
    if (!fs.existsSync(brandsUploadsDir)) {
      fs.mkdirSync(brandsUploadsDir, { recursive: true });
    }
    
    // Process and save receipt photo
    const receiptPhotoBytes = await receiptPhoto.arrayBuffer();
    const receiptFormat = getOutputFormat(receiptPhoto.type);
    const receiptPhotoName = `receipt_${Date.now()}.${receiptFormat}`;
    const receiptPhotoPath = path.join(subscriptionUploadsDir, receiptPhotoName);
    
    // Optimize receipt photo
    await sharp(Buffer.from(receiptPhotoBytes))
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      [receiptFormat]({ quality: 80 })
      .toFile(receiptPhotoPath);
    
    // Process and save brand photo if provided
    let brandPhotoName = null;
    if (brandPhoto) {
      // Validate brand photo
      if (!isValidImage(brandPhoto)) {
        return NextResponse.json({ 
          error: 'Invalid brand photo format. Please upload a JPEG, PNG, or WebP image.' 
        }, { status: 400 });
      }
      
      const brandPhotoBytes = await brandPhoto.arrayBuffer();
      const brandFormat = getOutputFormat(brandPhoto.type);
      brandPhotoName = `brand_${session.user.id}_${Date.now()}.${brandFormat}`;
      const brandPhotoPath = path.join(brandsUploadsDir, brandPhotoName);
      
      // Optimize brand photo
      await sharp(Buffer.from(brandPhotoBytes))
        .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
        [brandFormat]({ quality: 80 })
        .toFile(brandPhotoPath);
    }
    
    // Create subscription application
    const application = await prisma.subscriptionApplication.create({
      data: {
        userId: session.user.id,
        subscriptionType,
        receiptCode,
        receiptPhotoPath: `/uploads/subscription-applications/${receiptPhotoName}`,
        brandPhotoPath: brandPhotoName ? `/uploads/brands/${brandPhotoName}` : null,
        notes,
        status: 'pending'
      }
    });
    
    return NextResponse.json({ 
      success: true, 
      application 
    });
    
  } catch (error) {
    console.error('Error creating subscription application:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    }, { status: 500 });
  }
} 