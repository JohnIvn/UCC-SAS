import express from "express";
import { getAllStudents } from "../Controllers/aimsStudentAccountsController.js";

const router = express.Router();

router.post("/", getAllStudents);

export default router;