// We're using a custom directory so we need to import differently
import { PrismaClient } from '../../generated/client'

// Add prisma to the NodeJS global type
declare global {
  var prisma: PrismaClient | undefined
}

// Prevent multiple instances of Prisma Client in development
const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma 