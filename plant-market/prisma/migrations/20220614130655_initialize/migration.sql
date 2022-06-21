-- CreateTable
CREATE TABLE "Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "species" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "spaceRequired" INTEGER NOT NULL,
    "successRate" REAL NOT NULL,
    "yieldPrice" REAL NOT NULL
);
