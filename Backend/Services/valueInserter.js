import bcrypt from "bcrypt";
import SubjectModel from "../Models/subjectsModel.js";
import SectionModel from "../Models/sectionModel.js";
import CourseModel from "../Models/courseModel.js";
import { TeacherAccount } from "../Models/teacherAccountModel.js";

export const insertSubjectIfNotExist = async () => {
  try {
    const existingSubject = await SubjectModel.findAll();

    if (existingSubject.length === 0) {
      const subjects = [
        {
          subject_code: "IT 102",
          name: "Advanced Database Systems",
          description: "-",
        },
        {
          subject_code: "CCS 106",
          name: "Applications Development and Emerging Technologies",
          description: "-",
        },
        {
          subject_code: "IT 103",
          name: "Computer System Organization",
          description: "-",
        },
        {
          subject_code: "IT 101",
          name: "Integrative Programming and Technologies",
          description: "-",
        },
        { subject_code: "IT 104", name: "Networking 2", description: "-" },
        {
          subject_code: "GEC 007",
          name: "Science, Technology & Society",
          description: "-",
        },
        {
          subject_code: "PATHFIT 4",
          name: "Sports and Fitness",
          description: "-",
        },
      ];

      await SubjectModel.bulkCreate(subjects);
      console.log("Subjects inserted successfully");
    } else {
      console.log("Subjects already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting subjects:", error);
  }
};

export const insertSectionIfNotExist = async () => {
  try {
    const existingSection = await SectionModel.findAll();

    if (existingSection.length === 0) {
      const Section = [
        {
          name: "-",
          year: "1",
          section: "A",
          description: "-",
        },
        {
          name: "-",
          year: "2",
          section: "B",
          description: "-",
        },
        {
          name: "-",
          year: "3",
          section: "C",
          description: "-",
        },
        {
          name: "-",
          year: "4",
          section: "D",
          description: "-",
        },
      ];

      await SectionModel.bulkCreate(Section);
      console.log("Section inserted successfully");
    } else {
      console.log("Section already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Section:", error);
  }
};

export const insertCourseIfNotExist = async () => {
  try {
    const existingSection = await CourseModel.findAll();

    if (existingSection.length === 0) {
      const Course = [
        {
          Course_code: "-",
          name: "BSIT",
          description: "Bachelor of Science in Information Technology",
        },
        {
          Course_code: "-",
          name: "BSCS",
          description: "Bachelor of Science in Computer Science",
        },
        {
          Course_code: "-",
          name: "BSIS",
          description: "Bachelor of Science in Information Systems",
        },
        {
          Course_code: "-",
          name: "BSEMC",
          description:
            "Bachelor of Science in Entertainment and Multimedia Computing",
        },
      ];

      await CourseModel.bulkCreate(Course);
      console.log("Course inserted successfully");
    } else {
      console.log("Course already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Course:", error);
  }
};

const saltRounds = 10;

export const insertTeacherIfNotExist = async () => {
  try {
    const existingTeacher = await TeacherAccount.findAll();

    if (existingTeacher.length === 0) {
      const password = "testtest";

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const Teacher = [
        {
          teacherNumber: 1,
          name: "Testtest",
          email: "testtest@gmail.com",
          phoneNumber: "099999999",
          password: hashedPassword,
        },
      ];

      await TeacherAccount.bulkCreate(Teacher);
      console.log("Teacher inserted successfully");
    } else {
      console.log("Teacher already exists, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Teacher:", error);
  }
};
