import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db";
import { compare } from "bcrypt";
import { Session } from "next-auth";

interface CustomSession extends Session {
  user: {
    id: string;
    username: string;
    name: string;
    mobile: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    email?: string | null;
    image?: string | null;
  }
}

// Define a custom user type that extends NextAuth's User
interface CustomUser {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  isAdmin?: boolean;
}

if (!process.env.NEXTAUTH_URL) {
  console.warn('NEXTAUTH_URL environment variable is not set');
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          username: user.username,
          mobile: user.mobile,
          name: user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username,
          email: user.email || user.username,
          image: user.image,
          isAdmin: user.isAdmin,
          firstName: user.firstName,
          lastName: user.lastName
        };
      },
    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allow all relative URLs without redirection changes
      if (url.startsWith('/')) {
        // Prevent redirects to sign-in with callbackUrl params when using the back button
        if (url.startsWith('/sign-in?callbackUrl=')) {
          // Extract the callback URL from the query parameter
          const callbackUrl = new URL(url, baseUrl).searchParams.get('callbackUrl');
          
          // If we have a valid callback URL, and it's from our site, use it directly
          if (callbackUrl && callbackUrl.startsWith('/')) {
            return `${baseUrl}${callbackUrl}`;
          }
        }
        
        return `${baseUrl}${url}`;
      }
      // Allow absolute URLs on same origin
      else if (new URL(url).origin === baseUrl) {
        return url;
      }
      // Default to dashboard
      return `${baseUrl}/dashboard`;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = (user as CustomUser).isAdmin || false;
        token.email = user.email;
        token.name = user.name;
      }
      
      // If this is a Google sign-in, update user data if needed
      if (account?.provider === "google" && profile) {
        const existingUser = await db.user.findUnique({
          where: { email: profile.email },
        });
        
        if (existingUser) {
          // Check if we need to update user data
          const needsUpdate = 
            (profile.name && existingUser.name !== profile.name) ||
            (profile.image && existingUser.image !== profile.image);
            
          if (needsUpdate) {
            await db.user.update({
              where: { id: existingUser.id },
              data: {
                name: profile.name || existingUser.name,
                image: profile.image || existingUser.image,
                // Also ensure username is set to email
                username: profile.email,
              },
            });
          }
        }
      }
      
      return token;
    },
    async session({ session, token }) {
      if (token) {
        const user = await db.user.findUnique({
          where: { id: token.id as string },
        });
        
        if (user) {
          (session as CustomSession).user = {
            ...session.user,
            id: token.id as string,
            isAdmin: token.isAdmin as boolean,
            firstName: user.firstName ?? '',
            lastName: user.lastName ?? '',
            mobile: user.mobile ?? '',
            username: user.username ?? '',
            name: user.name ?? user.username ?? '',
          };
        }
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      // For manual registration, ensure name and email are properly set
      if (account?.provider === "credentials" && user) {
        const dbUser = await db.user.findUnique({
          where: { id: user.id },
        });
        
        if (dbUser && (!dbUser.email || !dbUser.name)) {
          await db.user.update({
            where: { id: user.id },
            data: {
              email: dbUser.username,
              name: `${dbUser.firstName || ''} ${dbUser.lastName || ''}`.trim() || dbUser.username,
            },
          });
        }
      }
      
      return true;
    },
  },
};