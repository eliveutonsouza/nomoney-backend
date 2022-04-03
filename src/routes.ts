import { Request, Response, Router as RouterExpress } from "express";

import { StatusController } from "./status/controller/status.controller";

const Router = RouterExpress();

Router.get("/status", (req: Request, res: Response) => {
    // Returning the responsess
    return StatusController.getStatus(res, req);
});

export { Router };
