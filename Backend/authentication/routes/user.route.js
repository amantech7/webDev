import express from "express";
import {
    getUserProfile,
  updateProfile,
  userLogin,
  userLogOut,
  userRegister,
  
} from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/singup", userRegister);
router.post("/login", userLogin);
router.get("/logout", userLogOut);
router.get("/profile", getUserProfile);
router.put("/profile", updateProfile);      



export default router;