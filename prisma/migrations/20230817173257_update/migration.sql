/*
  Warnings:

  - You are about to drop the column `validado` on the `registro` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "registro" DROP COLUMN "validado",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
