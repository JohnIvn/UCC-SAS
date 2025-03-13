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
} from "./Services/tableCreate.js";
import {
  insertSubjectIfNotExist,
  insertSectionIfNotExist,
  insertCourseIfNotExist
} from "./Services/valueInserter.js";
import signInRouter from "./Routes/signInRoute.js";
import signUpRouter from "./Routes/signUpRoute.js";
import integratorRouter from "./Routes/integratorRoute.js";
import { integratorInserter } from "./Services/integratorInserter.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/signin", signInRouter);
app.use("/signup", signUpRouter);
app.use("/aimsStudentAccounts", integratorRouter);

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

    console.log("Tables have been created or checked.");

    await insertSubjectIfNotExist();
    await insertSectionIfNotExist();
    await insertCourseIfNotExist();

    const server = app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });

    await integratorInserter();
  } catch (error) {
    console.error("Error initializing the application:", error);
    process.exit(1);
  }
}

initializeApp();
