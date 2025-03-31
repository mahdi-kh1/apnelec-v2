import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error', 'warn'],
    errorFormat: 'pretty',
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db
}

// Test the connection
db.$connect()
  .then(() => {
    console.log('Database connection established')
  })
  .catch((error) => {
    console.error('Database connection failed:', error)
  })