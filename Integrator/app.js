import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import createDatabaseIfNotExists from "./Services/databaseCreate.js";
import db from "./database.js";
import { createTableAimsStudentAccounts } from "./Services/tableCreate.js";
import { insertStudentsInfo } from "./Services/studentInserter.js";
import studentRoute from "./Routes/aimsStudentAccountsRoutes.js";

dotenv.config();
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/aimsStudentAccounts', studentRoute);

async function initializeApp() {
  try {
    await createDatabaseIfNotExists();
    await db.authenticate();
    await createTableAimsStudentAccounts();

    await insertStudentsInfo();

    console.log("Tables have been created or checked.");

    const server = app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error initializing the application:", error);
    process.exit(1);
  }
}

initializeApp();
