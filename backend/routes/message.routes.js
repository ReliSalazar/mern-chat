import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protect-route.js";

const router = express.Router();

router.post("/send/:receiverId", protectRoute, sendMessage);
router.get("/:receiverId", protectRoute, getMessages);

export default router;
