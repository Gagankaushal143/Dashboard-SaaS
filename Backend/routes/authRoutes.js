import express from "express";
import { login, signup } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authMiddleware, async (req, res) =>{
    const user = await User.findById(req.user.id).select("-password")
    res.json(user)
});

export default router;