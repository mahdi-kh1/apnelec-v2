// Add this file to declare modules without type definitions
declare module 'uuid';
declare module 'sonner';

// Extend the next-auth session type
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      isAdmin: boolean;
    } & DefaultSession['user'];
  }
} 