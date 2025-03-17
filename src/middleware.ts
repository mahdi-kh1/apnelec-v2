import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: Request) {
  const token = await getToken({ req: request as any });

  const url = new URL(request.url);
  if (!token && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/access', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*'
}