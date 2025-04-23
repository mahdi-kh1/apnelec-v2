import { PrismaClient } from '@prisma/client';

// Add prisma to the NodeJS global type
interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal & typeof globalThis;

const prisma = global.prisma || new PrismaClient({
  log: ['error'],
});

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export { prisma };
export default prisma; 