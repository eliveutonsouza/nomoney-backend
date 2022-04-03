import { Request, Response, Router as RouterExpress } from "express";

import { StatusController } from "./status/controller/status.controller";

const Router = RouterExpress();

Router.get("/status", (req: Request, res: Response) => {
    return StatusController.getStatus();
});

export { Router };
