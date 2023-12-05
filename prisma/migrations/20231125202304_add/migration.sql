/*
  Warnings:

  - Added the required column `updated_at` to the `Situations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `meme_card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `twist_cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users_cosmetics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Situations" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "meme_card" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "twist_cards" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users_cosmetics" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
