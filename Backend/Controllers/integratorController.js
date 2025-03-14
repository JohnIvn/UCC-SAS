import { Op } from "sequelize";
import bcrypt from "bcrypt";
import { userStudentAccount } from "../Models/studentAccountModel.js";

const integratorAddStudentAccount = async (req, res) => {
    try {
        console.log("Received data:", req.body);

        const {
            studentNumber,
            first_name,
            middle_name,
            last_name,
            course,
            year,
            section,
            role,
            email,
            phoneNumber,
            password,
        } = req.body;

        if (!studentNumber) return res.status(400).json({ message: "Student number is required" });
        if (!first_name) return res.status(400).json({ message: "Name is required" });
        if (!middle_name) return res.status(400).json({ message: "Name is required" });
        if (!last_name) return res.status(400).json({ message: "Name is required" });
        if (!course) return res.status(400).json({ message: "Course is required" });
        if (!year) return res.status(400).json({ message: "Year is required" });
        if (!section) return res.status(400).json({ message: "Section is required" });
        if (!role) return res.status(400).json({ message: "Role is required" });
        if (!email) return res.status(400).json({ message: "Email is required" });
        if (!phoneNumber) return res.status(400).json({ message: "Phone number is required" });
        if (!password) return res.status(400).json({ message: "Password is required" });

        const existingStudent = await userStudentAccount.findOne({
            where: {
                [Op.or]: [
                    { studentNumber: studentNumber },
                    { email: email }
                ]
            }
        });

        console.log("Existing student found:", existingStudent); 

        if (existingStudent) {
            return res.status(409).json({ message: "Student account with this number or email already exists" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newStudent = await userStudentAccount.create({
            studentNumber,
            first_name,
            middle_name,
            last_name,
            course,
            year,
            section,
            role,
            email,
            phoneNumber,
            password: hashedPassword, 
        });

        console.log("New student added:", newStudent); 
        res.status(201).json({ message: "Student account created successfully", newStudent });

    } catch (error) {
        console.error("Error details:", error);
        res.status(500).json({ message: "Error creating student account", error });
    }
};

export { integratorAddStudentAccount };
