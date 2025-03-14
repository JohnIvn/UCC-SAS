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
      console.log("No students with null subject1 found.");
      return;
    }

    const shuffledSubjects = subjectCodes.sort(() => Math.random() - 0.5);

    for (let i = 0; i < students.length; i++) {
      const randomSubject =
        shuffledSubjects[i % shuffledSubjects.length]; 

      await students[i].update({ subject1: randomSubject });
    }

    console.log("Subjects randomized successfully.");
  } catch (error) {
    console.error("Error randomizing subjects:", error);
  }
};

export default randomizeSubjects;
