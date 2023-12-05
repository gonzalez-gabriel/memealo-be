-- CreateTable
CREATE TABLE "Situations" (
    "id" SERIAL NOT NULL,
    "descriptions" TEXT NOT NULL,

    CONSTRAINT "Situations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meme_card" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "card_number" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "card_lore" TEXT NOT NULL,

    CONSTRAINT "meme_card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "twist_cards" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "twist_cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "meme_card_card_number_key" ON "meme_card"("card_number");

-- CreateIndex
CREATE UNIQUE INDEX "twist_cards_key_key" ON "twist_cards"("key");
