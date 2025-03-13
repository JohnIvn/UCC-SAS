import express from "express";
import { integratorAddStudentAccount } from "../Controllers/integratorController.js";

const router = express.Router();

router.post("/", integratorAddStudentAccount);

export default router;