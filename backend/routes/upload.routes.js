import express from "express";
import multer from "multer";
import { getImageUrlById, ImageonDB, updateImage } from "../controllers/img.controller.js";
import { adminProtectRoute } from "../middleware/adminProtectRoute.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();
// Configure multer to use memory storage for buffers

const upload = multer();

router.get("/find/:id", getImageUrlById);
router.post("/submit",protectRoute,adminProtectRoute, upload.single("file"), ImageonDB);
router.patch("/change/:id", upload.single("file"), updateImage);

export default router;
