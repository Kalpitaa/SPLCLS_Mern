import express from "express";
import {
  registerUser,
  getUsers
} from "../controllers/userController.js";

import validateRegister from "../middlewares/Register.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/register", validateRegister, registerUser);

export default router;