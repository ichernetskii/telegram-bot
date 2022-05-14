import { config } from "dotenv";
import express from "express";
import newMessage from "./routes/new-message";

config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", newMessage);

const PORT = process.env.PORT || 3000
async function start() {
    try {
        // LISTEN
        app.listen(PORT, () => {
            console.log("\x1b[32m\x1b[1m%s\x1b[0m", `Application started on port ${PORT}`);
        })
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}
start();
