import { XCircle } from "lucide-react";
import Link from "next/link";

export default function AccessDenied() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <XCircle className="w-20 h-20 text-red-500 dark:text-red-400 mx-auto animate-pulse" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50">
          Access Denied
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          You don&apos;t have permission to access this page.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 
          dark:hover:bg-blue-600 text-white font-medium rounded-xl transition-all 
          duration-200 shadow-sm hover:shadow-md"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}