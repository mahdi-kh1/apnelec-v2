import NextAuth from "next-auth"

declare module "next-auth" {
    interface User {
        id: string
        username: string | null
        mobile: string | null
        name: string | null
        firstName: string | null
        lastName: string | null
        isAdmin: boolean
    }

    interface Session {
        user: User & {
            username: string
            name: string
            mobile: string
            firstName: string
            lastName: string
            isAdmin: boolean
        }
    }

    interface JWT {
        username: string
        mobile: string
        name: string
        firstName: string
        lastName: string
        isAdmin: boolean
    }
}

export interface PasswordUpdate {
  currentPassword?: string;
  newPassword: string;
  confirmPassword: string;
}

export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    username: string; // readonly
    mobile: string;
}

export interface UpdateUserProfile {
    firstName: string;
    lastName: string;
    mobile: string;
}