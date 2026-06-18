import express from "express";
import { processData } from "../controllers/processController.js";

const router = express.Router();

router.post("/:id", processData);

export default router;