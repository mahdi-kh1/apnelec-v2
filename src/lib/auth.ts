import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./db";
import { compare } from "bcrypt";

// Add User type definition
type User = {
    id: string;
    username: string | null;
    mobile: string | null;
    email?: string | null;
    name?: string | null;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
}

if (!process.env.NEXTAUTH_URL) {
  console.warn('NEXTAUTH_URL environment variable is not set');
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/sign-in',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error('Missing username or password');
                }

                const user = await db.user.findUnique({
                    where: { username: credentials.username }
                });

                if (!user || !user.password) {
                    throw new Error('No user found with this username');
                }

                const passwordValid = await compare(credentials.password, user.password);
                if (!passwordValid) {
                    throw new Error('Incorrect password');
                }

                return {
                    id: user.id,
                    username: user.username || '',
                    mobile: user.mobile || '',
                    firstName: user.firstName || '',
                    lastName: user.lastName || '',
                    name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
                    isAdmin: user.isAdmin || false,
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
                token.mobile = user.mobile;
                token.name = user.name;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.username = token.username as string;
                session.user.mobile = token.mobile as string;
                session.user.name = token.name as string;
                session.user.firstName = token.firstName as string;
                session.user.lastName = token.lastName as string;
                session.user.isAdmin = token.isAdmin as boolean;
            }
            return session;
        },
    }
};