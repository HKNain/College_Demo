import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { adminProtectRoute } from "../middleware/adminProtectRoute.js";
import { getEditData, postEditData } from "../controllers/edit.controller.js";

const router = express.Router();

router.patch("/posteditdata", protectRoute,adminProtectRoute,postEditData);
router.get("/geteditdata",getEditData)


export default router;