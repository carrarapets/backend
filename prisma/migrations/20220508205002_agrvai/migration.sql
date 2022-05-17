/*
  Warnings:

  - You are about to drop the column `pets_id` on the `cliente` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cliente" DROP CONSTRAINT "cliente_pets_id_fkey";

-- AlterTable
ALTER TABLE "cliente" DROP COLUMN "pets_id";
