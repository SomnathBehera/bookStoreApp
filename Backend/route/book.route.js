import express from "express";
import { getBook } from "../contoller/book.controller.js";

const router = express.Router()
router.get("/",getBook)

export default router;