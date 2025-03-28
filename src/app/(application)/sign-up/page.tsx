"use client";

import SignUpForm from "@/components/form/SignUpForm";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-24">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Create an account
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Please enter your details to sign up
          </p>
        </div>
        <SignUpForm />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300"></span>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              or continue with
            </span>
          </div>
        </div>

        <GoogleSignInButton>
          <span className="text-gray-700">Sign up with Google</span>
        </GoogleSignInButton>

        <p className="text-center text-sm text-gray-500">
          Already have an account?
          <Link
            className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            href="/sign-in"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
