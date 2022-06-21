/*
  Warnings:

  - Added the required column `price` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `successRate` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yieldPrice` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" REAL NOT NULL,
    "species" TEXT NOT NULL,
    "spaceRequired" INTEGER NOT NULL,
    "successRate" REAL NOT NULL,
    "yieldPrice" REAL NOT NULL,
    "health" INTEGER NOT NULL DEFAULT 100,
    "age" INTEGER NOT NULL
);
INSERT INTO "new_Animal" ("age", "health", "id", "spaceRequired", "species") SELECT "age", "health", "id", "spaceRequired", "species" FROM "Animal";
DROP TABLE "Animal";
ALTER TABLE "new_Animal" RENAME TO "Animal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
