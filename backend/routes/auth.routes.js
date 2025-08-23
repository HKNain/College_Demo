import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me",protectRoute,(req,res)=>{
    const role = req.user.role
    return res.json({role})
})

export default router;