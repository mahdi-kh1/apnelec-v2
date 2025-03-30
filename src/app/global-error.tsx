"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50 dark:bg-gray-900">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
            A critical error occurred. We&apos;ve been notified and are working to fix the issue.
          </p>
          <Button onClick={reset}>
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
} 