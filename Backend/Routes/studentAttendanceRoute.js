import express from "express";
import getStudentSubjectsAttendance from "../Controllers/studentAttendance.js";

const router = express.Router();

router.get("/", getStudentSubjectsAttendance);

export default router;