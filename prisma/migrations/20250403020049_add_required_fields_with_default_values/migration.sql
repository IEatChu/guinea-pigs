/*
  Warnings:

  - You are about to drop the column `condition` on the `Stuff` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Stuff` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stuff" DROP COLUMN "condition",
DROP COLUMN "quantity",
ADD COLUMN     "age" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "breed" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "story" TEXT NOT NULL DEFAULT '';
