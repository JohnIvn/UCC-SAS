import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { StaffSignInModel } from "../Models/teacherAccountModel.js";

dotenv.config();

const StaffSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await StaffSignInModel.findOne({ where: { email } });

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    if (!user) {
      return res.status(400).json({ message: "User not Found" });
    }

    const verified = await bcrypt.compare(password, user.password);

    if (!verified) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { email: user.email, userId: user.userId, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      message: "Login successful.",
      token: token,
      role: user.role,
      redirectTo: user.role === "Teacher" ? "/staff-page" : "/homepage",
    });
  } catch (error) {
    console.error("Error in SignIn function: ", error);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

export default StaffSignIn;
