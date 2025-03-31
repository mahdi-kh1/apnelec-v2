"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="animate-spin text-primary mb-4">
        <Loader2 size={48} />
      </div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Loading...
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Please wait while we prepare your content
      </p>
    </div>
  );
} 