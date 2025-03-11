import SubjectModel from "../Models/subjectsModel.js";
import SectionModel from "../Models/sectionModel.js";

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
          name: "BSIT 2B",
          year: "2",
          section: "B",
          description: "Bachelor of Science in Information Technology",
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
