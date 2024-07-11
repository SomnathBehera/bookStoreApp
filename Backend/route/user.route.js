import express from "express";
import { signup, login,submit } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/contact", submit);
export default router;