import { userStudentAccount, AdminAccount } from "../Models/userStudentAccountModel.js";
import TeacherAccount from "../Models/userTeacherModel.js";
import userImg from "../Models/imageModel.js";
import Subject from "../Models/subjectsModel.js";
import Section from "../Models/sectionModel.js";

async function createTableUserAccounts() {
  try {
    await userStudentAccount.sync({ alter: false });
    console.log("Students Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Student User Account table", error);
  }
}

async function createTableUserAdminAccounts() {
  try {
    await AdminAccount.sync({ alter: false });
    console.log("Students Admin Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating User Admin Account table", error);
  }
}

async function createTableTeacherAccountTable() {
  try {
    await TeacherAccount.sync({ alter: false });
    console.log("Teacher Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Teacher Account table", error);
  }
}
  
async function createTableImageTable() {
  try {
    await userImg.sync({ alter: false });
    console.log("Image table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Image Account table", error);
  }
}

async function createTableSubject() {
  try {
    await Subject.sync({ alter: false });
    console.log("Subject table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Subject table", error);
  }
}

async function createTableSection() {
  try {
    await Section.sync({ alter: false });
    console.log("Section table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Section table", error);
  }
}

export { createTableUserAccounts, createTableUserAdminAccounts ,createTableTeacherAccountTable ,createTableImageTable, createTableSubject, createTableSection };
