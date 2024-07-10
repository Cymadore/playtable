-- CreateTable
CREATE TABLE "gamelist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "count" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "rent" TEXT[],
    "point" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gamelist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gamelist_name_key" ON "gamelist"("name");
