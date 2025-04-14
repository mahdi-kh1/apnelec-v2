-- AlterTable
ALTER TABLE "installers" ADD COLUMN     "brandPhotoPath" TEXT;

-- AlterTable
ALTER TABLE "subscriptions" ALTER COLUMN "plan" SET DEFAULT 'yearly';
