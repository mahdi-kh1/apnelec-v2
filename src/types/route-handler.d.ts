import { NextRequest } from 'next/server';

declare module 'next/server' {
  interface RouteHandlerContext {
    params: {
      [key: string]: string | string[];
    };
  }
}

// Override the route handler types to match your implementation
declare global {
  type RouteSegmentConfig = {
    dynamic?: 'auto' | 'force-dynamic' | 'error' | 'force-static';
    revalidate?: number | false;
    fetchCache?: 'auto' | 'default-cache' | 'only-cache' | 'force-cache' | 'default-no-store' | 'only-no-store' | 'force-no-store';
    runtime?: 'nodejs' | 'edge';
    preferredRegion?: 'auto' | 'global' | 'home' | string | string[];
  };
} 