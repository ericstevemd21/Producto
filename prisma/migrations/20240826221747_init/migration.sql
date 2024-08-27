-- CreateTable
CREATE TABLE "producto" (
    "id" SERIAL NOT NULL,
    "id_producto_entrada" SERIAL NOT NULL,
    "id_producto_salida" SERIAL NOT NULL,
    "nombre_pro" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "descricion" TEXT NOT NULL,
    "creacte_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id")
);
