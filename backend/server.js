import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"

import connectToDatabase from "./database/connectToDatabase.js";
import authRoutes from "./routes/auth.routes.js"
import editRoutes from "./routes/edit.route.js"
import uploadRoutes from "./routes/upload.routes.js"

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true,
}));


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))

app.use("/api/auth", authRoutes);
app.use("/admin", editRoutes);
app.use("/upload", uploadRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectToDatabase();
});