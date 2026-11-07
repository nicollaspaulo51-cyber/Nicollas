import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

const lista = await prisma.jogo.findMany({
    include: {
        personagens: true,
        conquistas: true,
        plataformas: { include: { plataforma: true } },
    },
});
