import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/stats", authMiddleware, (req, res) =>{
    res.json({
        users: 900,
        revenue: 15900,
        projects: 32,
        growth: 18,
    });
});

export default router;