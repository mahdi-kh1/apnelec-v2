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

// For testing in development, wrap the connection test in try/catch
if (process.env.NODE_ENV !== 'production') {
  try {
    db.$connect()
      .then(() => {
        console.log('Database connection established')
      })
      .catch((error: any) => {
        console.error('Database connection failed:', error)
      })
  } catch (error: any) {
    console.error('Database connection setup error:', error)
  }
}