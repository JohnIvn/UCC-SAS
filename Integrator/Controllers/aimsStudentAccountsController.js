import { aimsStudentAccounts } from "../Models/aimsStudentInfoModel.js";

const getAllStudents = async (req, res) => {
  try {
    const students = await aimsStudentAccounts.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student accounts", error });
  }
};

export { getAllStudents };
