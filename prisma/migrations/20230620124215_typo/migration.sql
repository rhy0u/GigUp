/*
  Warnings:

  - You are about to drop the column `intrument` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "intrument",
ADD COLUMN     "instrument" "Role";
