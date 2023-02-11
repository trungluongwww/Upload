import express from "express";
import dotenv from "dotenv";
import router from "./server/routes";
import * as fs from "fs";
async function init() {
    const app = express();

    dotenv.config();

    // create static folder
    if (fs.existsSync('./static')){
        fs.rmSync('./static', { recursive: true, force: true })
    }
    fs.mkdirSync('./static')

    router(app);

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log("⚡ server listen on port: ", port);
    });
}

init().then();

