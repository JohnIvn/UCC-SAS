import { userStudentAccount } from "../Models/studentAccountModel.js";

export const getUserStudentAccount = async (req, res) => {
  console.log("get user student account has been called.");
  try {
    const { userId } = req.user;
    console.log("userId: ", userId);

    const studentAccount = await userStudentAccount.findOne({
      where: { userId },
    });

    if (!studentAccount) {
      return res.status(404).json({ message: "Student account not found" });
    }
    console.log("response: ", studentAccount);
    return res.json(studentAccount);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch student account" });
  }
};

export const getAllDataById = async (req, res) => {
  console.log("get all data by ID has been called.");
  try {
    const { userId } = req.params;
    console.log("Requested userId: ", userId);

    const studentAccount = await userStudentAccount.findOne({
      where: { userId },
    });

    if (!studentAccount) {
      return res.status(404).json({ message: "No data found for the given ID" });
    }
    console.log("response: ", studentAccount);
    return res.json(studentAccount);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch data" });
  }
};

export const getByEmail = async (req, res) => {
    console.log("get by email has been called.");
    try {
      const { email } = req.params;
      console.log("Requested email: ", email);
  
      const studentAccount = await userStudentAccount.findOne({
        where: { email },
      });
  
      if (!studentAccount) {
        return res.status(404).json({ message: "No data found for the given email" });
      }
      console.log("response: ", studentAccount);
      return res.json(studentAccount);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to fetch data" });
    }
  };
  
