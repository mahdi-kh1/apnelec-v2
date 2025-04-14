import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  try {
    // Check if APNelec user exists
    const existingUser = await prisma.user.findUnique({
      where: { email: 'info@apnelec.co.uk' },
    });

    if (!existingUser) {
      // Create APNelec user
      const hashedPassword = await hash('123456789', 12);
      const user = await prisma.user.create({
        data: {
          email: 'info@apnelec.co.uk',
          username: 'info@apnelec.co.uk',
          password: hashedPassword,
          firstName: 'APNelec',
          lastName: 'Admin',
          name: 'APNelec Admin',
          isAdmin: true,
        },
      });

      // Create APNelec installer
      await prisma.installer.create({
        data: {
          userId: user.id,
          isActive: true,
          subscription: {
            create: {
              startDate: new Date(),
              endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
              plan: 'yearly',
              type: 'premium',
              isActive: true,
            },
          },
        },
      });

      console.log('Created default APNelec user and installer');
    } else {
      console.log('APNelec user already exists');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 