-- CreateTable
CREATE TABLE "Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "species" TEXT NOT NULL,
    "spaceRequired" INTEGER NOT NULL,
    "health" INTEGER NOT NULL DEFAULT 100,
    "age" INTEGER NOT NULL
);
