/*
  Warnings:

  - You are about to drop the column `detailsId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `UserDetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `UserDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_detailsId_fkey";

-- DropIndex
DROP INDEX "public"."User_detailsId_key";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "detailsId";

-- AlterTable
ALTER TABLE "public"."UserDetails" ADD COLUMN     "userId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserDetails_userId_key" ON "public"."UserDetails"("userId");

-- AddForeignKey
ALTER TABLE "public"."UserDetails" ADD CONSTRAINT "UserDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
