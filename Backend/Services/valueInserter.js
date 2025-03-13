import SubjectModel from "../Models/subjectsModel.js";
import SectionModel from "../Models/sectionModel.js";
import CourseModel from "../Models/courseModel.js";

export const insertSubjectIfNotExist = async () => {
  try {
    const existingSubject = await SubjectModel.findAll();

    if (existingSubject.length === 0) {
      const Subject = [
        {
          subject_code: "IT 102",
          name: "Advance Database Systems",
          description: "-",
        },
      ];

      await SubjectModel.bulkCreate(Subject);
      console.log("Subject inserted successfully");
    } else {
      console.log("Subject already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Subject:", error);
  }
};

export const insertSectionIfNotExist = async () => {
  try {
    const existingSection = await SectionModel.findAll();

    if (existingSection.length === 0) {
      const Section = [
        {
          "name": "-",
          "year": "1",
          "section": "A",
          "description": "-"
        },
        {
          "name": "-",
          "year": "2",
          "section": "B",
          "description": "-"
        },
        {
          "name": "-",
          "year": "3",
          "section": "C",
          "description": "-"
        },
        {
          "name": "-",
          "year": "4",
          "section": "D",
          "description": "-"
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
          description: "Bachelor of Science in Entertainment and Multimedia Computing",
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