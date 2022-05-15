import {Router} from "express";
import {sendMessage} from "../controllers/new-message";
const router = Router();

router.post(
    "/message",
    sendMessage,
)

export default router;
