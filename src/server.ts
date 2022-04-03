import "reflect-metadata";
import { app } from "./app";

const port = process.env.PORT || 3334;

app.listen(port, () =>
    console.log(`💸 Nomoney Server is running at http://localhost:${port}`)
);
