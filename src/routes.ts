import { Request, Response, Router as RouterExpress } from "express";

import { UserController } from "./controller/UserController";

const Router = RouterExpress();

Router.get("/status", (req: Request, res: Response) => {
    // Returning the responsess
    return UserController.getStatus(res, req);
});

export { Router };
