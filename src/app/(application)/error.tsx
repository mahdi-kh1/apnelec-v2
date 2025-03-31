"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-yellow-500 mb-4">
        <AlertTriangle size={64} />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Something went wrong!
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
        An error occurred while processing your request.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={() => reset()}
          variant="default"
        >
          Try again
        </Button>
        <Button
          onClick={() => window.location.href = '/dashboard'}
          variant="outline"
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
} 