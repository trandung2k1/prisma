import express, { Express, Request, Response, ErrorRequestHandler } from 'express';
const app: Express = express();
import dotenv from 'dotenv';
dotenv.config();
const port: Number = Number(process.env.PORT) || 4000;
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    await prisma.$connect();
    // await prisma.post.create({
    //     data: {
    //         title: 'Hi',
    //     },
    // });
}
main()
    .catch((e) => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });


app.get("/", async (req: Request, res: Response) => {
    try {
        const posts = await prisma.post.findMany()
        return res.status(200).json(posts);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
})
app.get("/user", async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findUnique({
            where: {
                email: 'trandungksnb00@gmail.com',
            },
        });
        return res.status(200).json(users);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
})
app.listen(port, () => {
    console.log('Server listening on port http://localhost:%d', port);
});
