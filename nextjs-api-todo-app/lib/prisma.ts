import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    // PrismaClientをインスタンス化しそれをグローバルオブジェクトに保存する
    const globalPrisma = global as typeof globalThis & {
        prisma: PrismaClient;
    };
    // PrismaClientをインスタンス化しそれをグローバルオブジェクトに保存する
    if (!globalPrisma.prisma) {
        globalPrisma.prisma = new PrismaClient();
    }
    // PrismaClientがグローバルオブジェクトに存在する場合は同じインスタンスを再度使用し余分なPrismaClientインスタンスを生成しないようにする
    prisma = globalPrisma.prisma;
}
