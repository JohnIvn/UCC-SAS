import {
  userStudentAccount,
  AdminAccount,
} from "../Models/studentAccountModel.js";
import TeacherAccount from "../Models/teacherAccountModel.js";
import userImg from "../Models/imageStudentModel.js";
import Subject from "../Models/subjectsModel.js";
import Section from "../Models/sectionModel.js";
import imageTeacher from "../Models/imageTeacherModel.js";
import Course from "../Models/courseModel.js";
import studentSubjects from "../Models/studentAccountSubjects.js";

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
    console.log(
      "Students Admin Account table is checked and updated if necessary"
    );
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
    console.log("Student Image table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Student Image Account table", error);
  }
}

async function createTeacherTableImageTable() {
  try {
    await imageTeacher.sync({ alter: false });
    console.log("Teacher Image table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Teacher Image Account table", error);
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

async function createTableCourse() {
  try {
    await Course.sync({ alter: false });
    console.log("Course table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Course table", error);
  }
}

async function createTabletudentSubjects() {
  try {
    await studentSubjects.sync({ alter: false });
    console.log("Student Subjects table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Student Subjects table", error);
  }
}

export {
  createTableUserAccounts,
  createTableUserAdminAccounts,
  createTableTeacherAccountTable,
  createTableImageTable,
  createTeacherTableImageTable,
  createTableSubject,
  createTableSection,
  createTableCourse,
  createTabletudentSubjects,
};
