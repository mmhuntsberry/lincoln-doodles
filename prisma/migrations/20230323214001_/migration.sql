/*
  Warnings:

  - Added the required column `doodleDir` to the `Doodle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doodleId` to the `Doodle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Doodle` ADD COLUMN `doodleDir` VARCHAR(191) NOT NULL,
    ADD COLUMN `doodleId` VARCHAR(191) NOT NULL;
