import express from "express";
import getStudentSubjectsAttendance from "../Controllers/studentAttendance.js";

const router = express.Router();

router.post("/:studentNumber/:subjectNo", getStudentSubjectsAttendance);

export default router;