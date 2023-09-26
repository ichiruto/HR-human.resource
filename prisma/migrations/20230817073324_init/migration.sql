-- CreateTable
CREATE TABLE "colaborador" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "cpf" INTEGER NOT NULL,
    "celular" INTEGER,
    "conhecimentos" TEXT[],
    "validado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "colaborador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "colaborador_email_key" ON "colaborador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "colaborador_cpf_key" ON "colaborador"("cpf");
