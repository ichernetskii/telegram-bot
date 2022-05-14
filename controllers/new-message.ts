import axios from "axios";
import {Request, Response} from "express";

const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`;

export const sendMessage = async (req: Request, res: Response) => {
    const { message } = req.body;

    const messageText = message?.text?.toLowerCase()?.trim();
    const chatId = message?.chat?.id;
    if (!messageText || !chatId) {
        return res.sendStatus(400);
    }

    let responseText = "I have nothing to say.";

    try {
        await axios.post(TELEGRAM_URI, {
            chat_id: chatId,
            text: responseText,
        });
        res.send("Done");
    } catch (e) {
        console.error(e);
        res.send(e);
    }
}
