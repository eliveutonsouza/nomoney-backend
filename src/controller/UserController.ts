import { Request, Response } from "express";
import { Get, Route } from "tsoa";

@Route("user")
export class UserController {
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
