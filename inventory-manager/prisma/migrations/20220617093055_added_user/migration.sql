/*
  Warnings:

  - Added the required column `ownerId` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Land` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "balance" REAL NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerId" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "species" TEXT NOT NULL,
    "spaceRequired" INTEGER NOT NULL,
    "successRate" REAL NOT NULL,
    "yieldPrice" REAL NOT NULL,
    CONSTRAINT "Plant_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Plant" ("id", "price", "spaceRequired", "species", "successRate", "yieldPrice") SELECT "id", "price", "spaceRequired", "species", "successRate", "yieldPrice" FROM "Plant";
DROP TABLE "Plant";
ALTER TABLE "new_Plant" RENAME TO "Plant";
CREATE TABLE "new_Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerId" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "species" TEXT NOT NULL,
    "spaceRequired" INTEGER NOT NULL,
    "successRate" REAL NOT NULL,
    "yieldPrice" REAL NOT NULL,
    "health" INTEGER NOT NULL DEFAULT 100,
    "age" INTEGER NOT NULL,
    CONSTRAINT "Animal_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Animal" ("age", "health", "id", "price", "spaceRequired", "species", "successRate", "yieldPrice") SELECT "age", "health", "id", "price", "spaceRequired", "species", "successRate", "yieldPrice" FROM "Animal";
DROP TABLE "Animal";
ALTER TABLE "new_Animal" RENAME TO "Animal";
CREATE TABLE "new_Land" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerId" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "acreage" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    CONSTRAINT "Land_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Land" ("acreage", "address", "id", "price") SELECT "acreage", "address", "id", "price" FROM "Land";
DROP TABLE "Land";
ALTER TABLE "new_Land" RENAME TO "Land";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
