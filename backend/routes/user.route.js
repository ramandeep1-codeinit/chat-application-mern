import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import getUserForSiderBar from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUserForSiderBar);

export default router;
