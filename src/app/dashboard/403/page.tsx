"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ShieldAlert } from "lucide-react";

export default function Forbidden() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-red-500 mb-4">
        <ShieldAlert size={64} />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Access Denied
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
        You don&apos;t have permission to access this page.
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