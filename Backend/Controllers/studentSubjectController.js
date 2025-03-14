import studentSubjects from "../Models/studentAccountSubjects.js";
import { Op } from "sequelize";

const getStudentSubjects = async (req, res) => {
  try {
    const { studentNumber } = req.params;

    const student = await studentSubjects.findOne({
      where: { studentNumber },
    });

    if (!student) {
      return res.status(404).json({ message: "No subject assigned yet." });
    }

    const subjects = [];
    for (let i = 1; i <= 8; i++) {
      if (student[`subject${i}`]) {
        subjects.push({
          subject: student[`subject${i}`],
          attendance: student[`subject${i}_attendance`],
        });
      }
    }

    if (subjects.length === 0) {
      return res.status(404).json({ message: "No subject assigned yet." });
    }

    return res.status(200).json({ studentNumber, subjects });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default getStudentSubjects;