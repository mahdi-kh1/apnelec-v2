-- CreateEnum
CREATE TYPE "InstallationStatus" AS ENUM ('DETAILS_COMPLETED', 'SIGNATURE_NEEDED', 'CONTRACT_SIGNED');

-- AlterTable
ALTER TABLE "installations" ADD COLUMN     "isLocked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "signatureInfo" JSONB,
ADD COLUMN     "status" "InstallationStatus" NOT NULL DEFAULT 'DETAILS_COMPLETED';
