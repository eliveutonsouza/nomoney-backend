import { Request, Response } from "express";
import { Get, Route } from "tsoa";

@Route("status")
export class StatusController {
    constructor() {
        // call services
    }

    @Get("/")
    public static async getStatus(
        res: Response,
        req: Request
    ): Promise<Response> {
        return res
            .json({
                message: "Server is running adsasdsd !",
            })
            .status(200);
    }
}
