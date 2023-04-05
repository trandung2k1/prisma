import { Express } from "express";
import user from './user.route'
import post from './post.route'
const routes = (app: Express): void => {
    app.use("/posts", post)
    app.use("/users", user)
}
export default routes;