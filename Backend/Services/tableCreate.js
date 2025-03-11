import StudentAccount from "../Models/userStudentAccountModel.js";
import TeacherAccount from "../Models/userTeacherModel.js";
import ImageModel from "../Models/imageModel.js";

async function createTableUserAccounts() {
  try {
    await StudentAccount.sync({ alter: false });
    console.log("Students Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating UserAccount table", error);
  }
}

async function createTableTeacherAccountTable() {
  try {
    await TeacherAccount.sync({ alter: false });
    console.log("Teacher Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating UserAccount table", error);
  }
}
  
async function createTableImageTable() {
  try {
    await ImageModel.sync({ alter: false });
    console.log("Image table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating UserAccount table", error);
  }
}

export { createTableUserAccounts, createTableTeacherAccountTable ,createTableImageTable };
