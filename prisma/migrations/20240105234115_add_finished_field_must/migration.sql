/*
  Warnings:

  - Made the column `finished` on table `tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tasks` MODIFY `finished` BOOLEAN NOT NULL DEFAULT false;
