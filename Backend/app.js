import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import createDatabaseIfNotExists from "./Services/databaseCreate.js";
import db from "./database.js";
import {
  createTableUserAccounts,
  createTableTeacherAccountTable,
  createTableImageTable,
  createTableSubject,
  createTableSection,
} from "./Services/tableCreate.js";
import { 
  insertSubjectIfNotExist,
  insertSectionIfNotExist,
} from "./Services/valueInserter.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function initializeApp() {
  try {
    await createDatabaseIfNotExists();
    await db.authenticate();
    await createTableUserAccounts();
    await createTableTeacherAccountTable();
    await createTableImageTable();
    await createTableSubject();
    await createTableSection();

    console.log("Tables have been created or checked.");

    await insertSubjectIfNotExist();
    await insertSectionIfNotExist();

    const server = app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error initializing the application:", error);
    process.exit(1);
  }
}

initializeApp();
