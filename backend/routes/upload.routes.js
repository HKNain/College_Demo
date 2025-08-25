import express from "express";
import multer from "multer"
import { fileUpload } from "../utils/upload.js";

const router = express.Router();
const upload = multer();

router.post("/submit",upload.single("file"),fileUpload)

export default router;