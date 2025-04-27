import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET() {
  // Revalidate critical paths that might have case-sensitivity issues
  revalidatePath('/');
  revalidatePath('/about');
  revalidatePath('/blog');
  revalidatePath('/contact');
  revalidatePath('/solar-solutions');
  revalidatePath('/ev-solutions');
  revalidatePath('/services');
  
  return NextResponse.json({ 
    revalidated: true, 
    message: 'Cache cleared successfully',
    timestamp: new Date().toISOString()
  });
}

export const dynamic = 'force-dynamic'; 