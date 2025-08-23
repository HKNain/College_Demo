import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"

import connectToDatabase from "./database/connectToDatabase.js";
import authRoutes from "./routes/auth.routes.js"

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors())

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectToDatabase();
});