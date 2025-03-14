import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import createDatabaseIfNotExists from "./Services/databaseCreate.js";
import db from "./database.js";
import {
  createTableUserAccounts,
  createTableUserAdminAccounts,
  createTableTeacherAccountTable,
  createTableImageTable,
  createTeacherTableImageTable,
  createTableSubject,
  createTableSection,
  createTableCourse,
  createTabletudentSubjects,
  createTableOffenses,
  createTableOGuest,
} from "./Services/tableCreate.js";
import {
  insertSubjectIfNotExist,
  insertSectionIfNotExist,
  insertCourseIfNotExist,
  insertTeacherIfNotExist,
} from "./Services/valueInserter.js";
import signInRouter from "./Routes/signInRoute.js";
import signUpRouter from "./Routes/signUpRoute.js";
import integratorRouter from "./Routes/integratorRoute.js";
import addGuestRouter from "./Routes/guestRoute.js";
import forgotRouter from "./Routes/forgotRoute.js";
import staffSignIn from "./Routes/staffSignInRoute.js";
import studentProfile from "./Routes/studentProfileRoute.js";
import getStudentSubjects from "./Controllers/studentSubjectController.js";
import getStudentSubjectsAttendance from "./Controllers/studentAttendance.js";
import { integratorInserter } from "./Services/integratorInserter.js";
import subjectShuffler from "./Services/subjectShuffler.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/signin", signInRouter);
app.use("/signup", signUpRouter);
app.use("/aimsStudentAccounts", integratorRouter);
app.use("/add-guest", addGuestRouter);
app.use("/staff-signin", staffSignIn);
app.use("/profile", studentProfile);
app.use("/forgot-password", forgotRouter);
app.use("/subjects/:studentNumber", getStudentSubjects);
app.use("/:studentNumber/:subjectNo", getStudentSubjectsAttendance);

async function initializeApp() {
  try {
    await createDatabaseIfNotExists();
    await db.authenticate();
    await createTableSection();
    await createTableCourse();
    await createTableSubject();
    await createTableUserAccounts();
    await createTableUserAdminAccounts();
    await createTableTeacherAccountTable();
    await createTableImageTable();
    await createTeacherTableImageTable();
    await createTabletudentSubjects();
    await createTableOffenses();
    await createTableOGuest();

    console.log("Tables have been created or checked.");

    await insertSubjectIfNotExist();
    await insertSectionIfNotExist();
    await insertCourseIfNotExist();
    await insertTeacherIfNotExist();

    const server = app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });

    await integratorInserter();
    await subjectShuffler();
  } catch (error) {
    console.error("Error initializing the application:", error);
    process.exit(1);
  }
}

initializeApp();
