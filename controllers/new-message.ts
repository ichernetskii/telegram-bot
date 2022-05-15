import axios from "axios";
import {Request, Response} from "express";
import {config} from "dotenv";
config();

const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`;

export const sendMessage = async (req: Request, res: Response) => {
    const { message } = req.body;
    console.log(TELEGRAM_URI);

    const messageText = message?.text?.toLowerCase()?.trim();
    const chatId = message?.chat?.id;
    if (!messageText || !chatId) {
        return res.sendStatus(400);
    }

    let responseText = "I have nothing to say.";

    try {
        const telegramResponse = await axios.post(TELEGRAM_URI, {
            chat_id: chatId,
            text: responseText,
        });
        res.send("Done");
    } catch (e) {
        console.error(e.response.data); //?
        res.send(e);
    }
}
