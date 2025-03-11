import bcrypt from "bcrypt";
import { userStudentAccount } from "../Models/userStudentAccountModel.js";
import UserImgModel from "../Models/imageModel.js";

const SignUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const existingAccount = await userStudentAccount.findOne({
      where: { email },
    });

    if (existingAccount) {
      return res
        .status(400)
        .json({ message: "Account already exists!", exists: true });
    }

    const newUserAccount = await userStudentAccount.create({
      email,
      password: hashedPassword,
    });

    await UserImgModel.create({
      userId: newUserAccount.userId,
    });

    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default SignUp;
