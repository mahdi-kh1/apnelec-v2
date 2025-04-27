import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'
import { withAuth } from "next-auth/middleware";

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

/**
 * Check if the request is coming from a back button press
 * This helps avoid redirecting during browser history navigation
 */
function isBackNavigation(req: NextRequest): boolean {
  const referer = req.headers.get('referer')
  const url = new URL(req.url)
  
  // No referrer means direct navigation
  if (!referer) return false
  
  // If referer is from the same host and not an auth page, 
  // it's likely a back navigation
  try {
    const refererUrl = new URL(referer)
    return refererUrl.host === url.host && 
           !authPaths.some(path => refererUrl.pathname.startsWith(path))
  } catch (e) {
    return false
  }
}

// We'll use a single middleware function with withAuth
export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl
    const token = req.nextauth.token;
    
    // Check if the path is an auth path and user is authenticated
    // Only redirect if it's not from a back navigation
    const isAuthPath = authPaths.some(path => 
      pathname.startsWith(path)
    )
    
    if (isAuthPath && token && !isBackNavigation(req)) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
    
    // Check for admin routes
    const isAdminRoute = pathname.startsWith('/dashboard/blogs') || 
                        pathname.startsWith('/dashboard/users');

    if (isAdminRoute && !token?.isAdmin) {
      return NextResponse.redirect(new URL('/dashboard/403', req.url));
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      // This handles the protection of routes automatically
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl
        
        // If it's a protected path, require a token
        const isProtectedPath = protectedPaths.some(path => 
          pathname.startsWith(path)
        )
        
        // For protected paths, require authentication
        if (isProtectedPath) {
          return !!token
        }
        
        // For all other paths, allow access
        return true
      }
    },
    pages: {
      signIn: '/sign-in',
    }
  }
);

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
    "/dashboard/:path*",
  ],
}