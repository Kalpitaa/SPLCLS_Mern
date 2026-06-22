import express from "express";
import {
  registerUser,
  loginUser,
  getUserById,
  searchUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user/:id", getUserById);
router.get("/search", searchUser);

export default router;