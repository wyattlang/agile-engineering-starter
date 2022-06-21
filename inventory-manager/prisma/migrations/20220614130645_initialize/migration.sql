-- CreateTable
CREATE TABLE "Land" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "acreage" INTEGER NOT NULL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "species" TEXT NOT NULL,
    "spaceRequired" INTEGER NOT NULL,
    "health" INTEGER NOT NULL DEFAULT 100,
    "age" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "species" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "spaceRequired" INTEGER NOT NULL,
    "successRate" REAL NOT NULL,
    "yieldPrice" REAL NOT NULL
);
