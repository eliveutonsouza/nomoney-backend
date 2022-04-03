// src/server.ts
import { app } from "./app";
import "reflect-metadata";

const port = process.env.PORT || 8080;

app.listen(port, () =>
    console.log(`💸 Nomoney Server is running at http://localhost:${port}`)
);
