-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "rol" "Rol" NOT NULL DEFAULT E'USER',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Libro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "isbn" INTEGER NOT NULL,
    "cantidad_total" INTEGER DEFAULT 1,
    "cantidad_prestada" INTEGER DEFAULT 0,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "autor_id" INTEGER NOT NULL,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuariosLibros" (
    "usuario_id" INTEGER NOT NULL,
    "libro_id" INTEGER NOT NULL,

    CONSTRAINT "UsuariosLibros_pkey" PRIMARY KEY ("usuario_id","libro_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Autor_nombre_key" ON "Autor"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Libro_isbn_key" ON "Libro"("isbn");

-- AddForeignKey
ALTER TABLE "Libro" ADD CONSTRAINT "Libro_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "Autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuariosLibros" ADD CONSTRAINT "UsuariosLibros_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuariosLibros" ADD CONSTRAINT "UsuariosLibros_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
