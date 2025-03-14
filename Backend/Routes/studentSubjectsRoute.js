import express from "express";
import getStudentSubjects from "../Controllers/studentSubjectController.js";

const router = express.Router();

router.get("/subjects/:studentNumbe", getStudentSubjects);

export default router;