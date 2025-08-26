import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { adminProtectRoute } from "../middleware/adminProtectRoute.js";
import { getEditData, postEditData } from "../controllers/edit.controller.js";
import {postEditAboutData, getEditAboutData } from "../controllers/editAbout.controller.js"
import { getEditContactData, postEditContactData } from "../controllers/editContact.controller.js";

const router = express.Router();

router.patch("/posteditdata",postEditData);
router.get("/geteditdata",getEditData)

router.patch("/posteditaboutdata",postEditAboutData);
router.get("/geteditaboutdata",getEditAboutData)

router.patch("/posteditcontactdata",postEditContactData);
router.get("/geteditcontactdata",getEditContactData)



 




export default router;