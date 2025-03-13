import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userStudentAccount } from "../Models/studentAccountModel.js"; 

dotenv.config();

export const authenticateToken = async (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader && authorizationHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication failed: Token not provided" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const student = await userStudentAccount.findOne({
      where: { email: decodedToken.email }, 
    });

    if (!student) {
      return res.status(404).json({ message: "Student account not found" });
    }

    req.user = {
      userId: student.userId,
      studentNumber: student.studentNumber,
      name: student.name,
      course: student.course,
      year: student.year,
      section: student.section,
      role: student.role,
      email: student.email,
      phoneNumber: student.phoneNumber,
    };

    next();
  } catch (error) {
    console.log("Token:", token);
    console.error("Token or database error:", error.message);
    return res.status(403).json({ message: "Forbidden: Token is invalid or expired" });
  }
};

export default authenticateToken;