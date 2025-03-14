import studentSubjects from "../Models/studentAccountSubjects.js";
import moment from "moment";

const getStudentSubjectsAttendance = async (req, res) => {
  try {
    const { studentNumber, subjectNo } = req.params;
    const parsedSubjectNo = parseInt(subjectNo, 10);

    if (isNaN(parsedSubjectNo) || parsedSubjectNo < 1 || parsedSubjectNo > 8) {
      return res
        .status(400)
        .json({ error: "Invalid subject number. Must be between 1 and 8." });
    }

    const subjectField = `subject${parsedSubjectNo}_attendance`;

    if (!studentSubjects.rawAttributes[subjectField]) {
      return res.status(400).json({
        error: `Invalid subject number. Field '${subjectField}' does not exist.`,
      });
    }

    const studentRecord = await studentSubjects.findOne({
      where: { studentNumber },
    });

    if (!studentRecord) {
      return res.status(404).json({ error: "Student record not found." });
    }

    const currentTime = moment().format("YYYY-MM-DD HH:mm:ss"); // Local time

    await studentRecord.update({ [subjectField]: currentTime });

    res.json({
      message: `Attendance for subject ${parsedSubjectNo} updated successfully.`,
      time: currentTime,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export default getStudentSubjectsAttendance;
