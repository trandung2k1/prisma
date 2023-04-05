import { Request, Response, Router } from "express";
import { prisma } from "..";
const router: Router = Router();
router.get("/", async (req: Request, res: Response) => {
    try {
        const posts = await prisma.post.findMany()
        return res.status(200).json(posts);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
})

export default router