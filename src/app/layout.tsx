import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "@/styles/global.css";
import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800']
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: {
    template: '%s | APN Elec',
    default: 'APN Elec',
  },
  description: 'Your brand description goes here',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${poppins.variable} font-montserrat antialiased`}
      >
        <AuthProvider>
          <ThemeProvider>
            <main className="dark:border-gray-800 bg-white text-black dark:text-white">
              {children}
            </main>
            <Toaster 
              position="top-center"
              toastOptions={{
                duration: 3000,
                style: {
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: '#fff',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  maxWidth: '400px',
                  fontFamily: 'var(--font-montserrat)',
                },
                success: {
                  duration: 2000,
                  style: {
                    background: 'rgba(34, 197, 94, 0.9)',
                  },
                  iconTheme: {
                    primary: '#fff',
                    secondary: 'rgba(34, 197, 94, 0.9)',
                  },
                },
                error: {
                  duration: 3000,
                  style: {
                    background: 'rgba(220, 38, 38, 0.9)',
                  },
                  iconTheme: {
                    primary: '#fff',
                    secondary: 'rgba(220, 38, 38, 0.9)',
                  },
                },
                loading: {
                  style: {
                    background: 'rgba(0, 0, 0, 0.8)',
                  },
                  iconTheme: {
                    primary: '#fff',
                    secondary: 'rgba(0, 0, 0, 0.8)',
                  },
                },
              }}
            />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
