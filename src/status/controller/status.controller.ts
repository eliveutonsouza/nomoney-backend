import { Get, Route } from "tsoa";

@Route("status")
export class StatusController {
    constructor() {
        // call services
    }

    @Get("/")
    public static async getStatus(): Promise<object> {
        return {
            message: "Server is running 🟩!",
        };
    }
}
