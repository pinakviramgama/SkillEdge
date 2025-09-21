import express from "express";
import { signup } from "../controllers/userController.js";
const router = express.Router();

router.post("/create", signup);

export default router;
