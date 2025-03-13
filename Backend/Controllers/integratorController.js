import { userStudentAccount } from "../Models/studentAccountModel.js";

const integratorAddStudentAccount = async (req, res) => {
    try {
      console.log("Received data:", req.body); 
  
      const {
        studentNumber,
        name,
        course,
        year,
        section,
        role,
        email,
        phoneNumber,
        password,
      } = req.body;

      if (!studentNumber) {
        return res.status(400).json({ message: "Student number is required" });
      }
      
      if (!name) {
        return res.status(400).json({ message: "Name is required" });
      }
      
      if (!course) {
        return res.status(400).json({ message: "Course is required" });
      }
      
      if (!year) {
        return res.status(400).json({ message: "Year is required" });
      }
      
      if (!section) {
        return res.status(400).json({ message: "Section is required" });
      }
      
      if (!role) {
        return res.status(400).json({ message: "Role is required" });
      }
      
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      
      if (!phoneNumber) {
        return res.status(400).json({ message: "Phone number is required" });
      }
      
      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }      
  
      const newStudent = await userStudentAccount.create({
        studentNumber,
        name,
        course,
        year,
        section,
        role,
        email,
        phoneNumber,
        password,
      });
      
      res.status(201).json({ message: "Student account created successfully", newStudent });
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).json({ message: "Error creating student account", error });
    }
  };
  

export { integratorAddStudentAccount };