import express from "express";
import multer from "multer";
import { ImageonDB, updateImage } from "../controllers/img.controller.js";

const router = express.Router();
// Configure multer to use memory storage for buffers

const upload = multer();

router.get("find/")
router.post("/submit", upload.single("file"), ImageonDB);
router.patch("/change/:id", upload.single("file"), updateImage);

export default router;
