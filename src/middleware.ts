import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'

// Paths that require authentication
const protectedPaths = [
  "/admin",
  "/profile",
  "/dashboard",
]

// Paths that should redirect authenticated users to dashboard
const authPaths = [
  "/sign-in",
  "/sign-up",
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Get the token from the session
  const token = await getToken({
    req: request,
    secret: process.env.SECRET,
  })
  
  // Check if the path is protected and user is not authenticated
  const isProtectedPath = protectedPaths.some(path => 
    pathname.startsWith(path)
  )
  
  if (isProtectedPath && !token) {
    const url = new URL("/sign-in", request.url)
    url.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(url)
  }
  
  // Check if the path is an auth path and user is authenticated
  const isAuthPath = authPaths.some(path => 
    pathname.startsWith(path)
  )
  
  if (isAuthPath && token) {
    return NextResponse.redirect(new URL("/", request.url))
  }
  
  return NextResponse.next()
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)",
  ],
}