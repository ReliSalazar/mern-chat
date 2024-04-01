import express from "express";
import { getUsers } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protect-route.js";

const router = express.Router();

router.get("/", protectRoute, getUsers);

export default router;
