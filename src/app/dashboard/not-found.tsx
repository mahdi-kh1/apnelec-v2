'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h2 className="text-3xl font-bold">Page Not Found</h2>
      <p className="text-muted-foreground text-center max-w-[500px]">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been removed or the link might be broken.
      </p>
      <Link href="/dashboard">
        <Button>
          Return to Dashboard
        </Button>
      </Link>
    </div>
  );
} 