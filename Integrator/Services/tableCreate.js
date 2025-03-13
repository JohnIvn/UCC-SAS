import { aimsStudentAccounts } from "../Models/aimsStudentInfo.js";

async function createTableAimsStudentAccounts() {
  try {
    await aimsStudentAccounts.sync({ alter: false });
    console.log(
      "Aims Students Account table is checked and updated if necessary"
    );
  } catch (error) {
    console.error(
      "Error checking/updating Aims Student User Account table",
      error
    );
  }
}

export { createTableAimsStudentAccounts };
