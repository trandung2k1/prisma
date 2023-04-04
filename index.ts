import express, { Express } from 'express';
const app: Express = express();
import dotenv from 'dotenv';
dotenv.config();
const port: Number = Number(process.env.PORT) || 4000;
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    await prisma.$connect();
    // await prisma.user.create({
    //     data: {
    //         name: 'Dung',
    //         email: 'trandungksnb00@gmail.com',
    //     },
    // });
    const users = await prisma.user.findUnique({
        where: {
            email: 'trandungksnb00@gmail.com',
        },
    });
    console.log(users);
}
main()
    .catch((e) => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
app.listen(port, () => {
    console.log('Server listening on port http://localhost:%d', port);
});
