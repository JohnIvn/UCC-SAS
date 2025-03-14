import studentSubjects from "../Models/studentAccountSubjects.js";
import Subject from "../Models/subjectsModel.js";

const randomizeSubjects = async () => {
  try {
    const subjects = await Subject.findAll({
      attributes: ["subject_code"],
    });

    if (subjects.length === 0) {
      console.log("No subjects available.");
      return;
    }

    const subjectCodes = subjects.map((subject) => subject.subject_code);

    const students = await studentSubjects.findAll({
      where: { subject1: null },
    });

    if (students.length === 0) {
      console.log("No students with null subjects found.");
      return;
    }

    for (let student of students) {
      const shuffledSubjects = [...subjectCodes].sort(() => Math.random() - 0.5);

      const updateData = {};
      for (let i = 1; i <= 8; i++) {
        updateData[`subject${i}`] = shuffledSubjects[i % shuffledSubjects.length];
      }

      await student.update(updateData);
    }

    console.log("Subjects randomized successfully for all students.");
  } catch (error) {
    console.error("Error randomizing subjects:", error);
  }
};

export default randomizeSubjects;