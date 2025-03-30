import SignInForm from "@/components/form/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Your Brand",
  description: "Sign in to your account to access personalized features and content.",
  openGraph: {
    title: "Sign In | Your Brand",
    description: "Sign in to your account to access personalized features and content.",
    images: [{ url: "/images/og-signin.jpg" }],
  },
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="w-full max-w-md">
        <SignInForm />
      </div>
    </div>
  );
}
