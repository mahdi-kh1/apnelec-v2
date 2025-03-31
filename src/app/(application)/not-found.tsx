"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-blue-500 mb-4">
        <FileQuestion size={64} />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Button
        onClick={() => router.push('/dashboard')}
        variant="outline"
      >
        Return to Dashboard
      </Button>
    </div>
  );
} 