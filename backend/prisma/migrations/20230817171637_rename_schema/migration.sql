/*
  Warnings:

  - You are about to drop the `colaborador` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "colaborador";

-- CreateTable
CREATE TABLE "registro" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "cpf" INTEGER NOT NULL,
    "celular" INTEGER,
    "conhecimentos" TEXT[],
    "validado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "registro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "registro_email_key" ON "registro"("email");

-- CreateIndex
CREATE UNIQUE INDEX "registro_cpf_key" ON "registro"("cpf");
