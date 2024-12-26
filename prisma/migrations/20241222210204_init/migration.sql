/*
  Warnings:

  - You are about to drop the column `description` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Task` table. All the data in the column will be lost.
  - Added the required column `text` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Task" ("createdAt", "id") SELECT "createdAt", "id" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
