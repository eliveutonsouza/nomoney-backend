import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerConfigs from "../public/swagger.json";
import { Router } from "./routes";

export const app = express();

app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerConfigs));

app.use(express.json());
app.use(Router);
