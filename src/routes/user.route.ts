import { Request, Response, Router } from "express";
import { prisma } from "..";
const router: Router = Router();
router.get("/", async (req: Request, res: Response) => {
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
export default router