import SignUpForm from "@/components/form/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account | Your Brand",
  description: "Join our community by creating a new account. Get access to exclusive features and content.",
  openGraph: {
    title: "Create an Account | Your Brand",
    description: "Join our community by creating a new account. Get access to exclusive features and content.",
    images: [{ url: "/images/og-signup.jpg" }],
  },
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:flex-none lg:w-1/2 xl:w-2/5">
        <div className="w-full max-w-md mx-auto lg:max-w-lg">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="text-center space-y-2 mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Create your account
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Join our community and start your journey
              </p>
            </div>
            
            <SignUpForm redirectToSignIn={true} />
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300 dark:border-gray-600"></span>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  or continue with
                </span>
              </div>
            </div>

            <div className="mt-4">
              {/* Google sign-in button will be rendered by the client component */}
              <div id="google-signin-container"></div>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
              Already have an account?{' '}
              <a
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline"
                href="/sign-in"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden lg:block relative lg:w-1/2 xl:w-3/5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="max-w-xl text-white space-y-8">
              <h2 className="text-4xl font-bold">Join our growing community</h2>
              <p className="text-lg opacity-90">
                Create an account to access exclusive content, save your preferences, and connect with other members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
