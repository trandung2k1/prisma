import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import morgan from 'morgan'
import helmet from 'helmet';
import bodyParser from 'body-parser';
dotenv.config();
import routes from './routes';
const app: Express = express();
const port: Number = Number(process.env.PORT) || 4000;
export const prisma = new PrismaClient();
async function main() {
    await prisma.$connect();
}
main()
    .catch((e) => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '100mb' }));
app.use(morgan('combined'));
app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'Welcome to server 👋👋'
    })
})
routes(app)
app.listen(port, () => {
    console.log('Server listening on port http://localhost:%d', port);
});
