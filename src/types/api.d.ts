import { NextRequest, NextResponse } from "next/server";

// Define consistent types for route handlers
declare module "next/server" {
  // Standard route context with Promise-based params
  interface RouteHandlerContext<Params extends Record<string, string> = Record<string, string>> {
    params: Promise<Params>;
  }
  
  // Type for ID-based route handlers
  type IdRouteContext = RouteHandlerContext<{ id: string }>;
}

// Custom utility types for API handlers
declare global {
  // Helper type for ID-based route handlers
  type ApiRouteWithId = (request: NextRequest, context: { params: Promise<{ id: string }> }) => Promise<NextResponse>;
  
  // Helper type for standard route handlers
  type ApiRoute = (request: Request) => Promise<NextResponse>;
} 