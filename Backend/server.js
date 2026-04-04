import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"

// dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);

connectDB();
app.get("/", (req, res) =>{
    res.send("Server is running and API too!!")
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, "0.0.0.0", () =>{
    console.log(`Server running...`);
});