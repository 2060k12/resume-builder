/*
  Warnings:

  - The primary key for the `UserDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserDetails` table. All the data in the column will be lost.
  - Added the required column `userDetailsId` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."AcademicJourney" DROP CONSTRAINT "AcademicJourney_userDetailsId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Experience" DROP CONSTRAINT "Experience_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Experience" ADD COLUMN     "userDetailsId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "public"."UserDetails" DROP CONSTRAINT "UserDetails_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserDetails_pkey" PRIMARY KEY ("userId");

-- AddForeignKey
ALTER TABLE "public"."AcademicJourney" ADD CONSTRAINT "AcademicJourney_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "public"."UserDetails"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Experience" ADD CONSTRAINT "Experience_userDetailsId_fkey" FOREIGN KEY ("userDetailsId") REFERENCES "public"."UserDetails"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
