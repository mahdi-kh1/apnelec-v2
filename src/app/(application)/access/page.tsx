
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AccessPage() {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <ShieldAlert className="w-16 h-16 text-red-500" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Authentication Required
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Please sign in to access the dashboard
            </p>
          </div>

          <div className="space-y-4">
            <Link href="/sign-in">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Sign In
              </Button>
            </Link>

            <Link href="/">
              <Button
                variant="outline"
                className="w-full border-gray-200 dark:border-gray-700 dark:text-gray-300"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
