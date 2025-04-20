import { PrismaClient } from '@prisma/client';

// Add logging to help debug the initialization
console.log('Initializing PrismaClient...');

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Check if it already exists to avoid re-initialization
export const prisma = globalForPrisma.prisma || new PrismaClient();

// Store it in the global object for development
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Make sure to use the same export for both named and default
export default prisma; 