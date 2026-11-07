import { PrismaClient } from "./generated/prisma/client.ts";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";

// Inicializa a conexão SQLite com o adapter do Prisma v7
const db = new Database("dev.db");
const adapter = new PrismaBetterSqlite3(db);
const prisma = new PrismaClient({ adapter });

const lista = await prisma.jogo.findMany({
    include: {
        personagens: true,
        conquistas: true,
        plataformas: { include: { plataforma: true } },
    },
});
