import bcrypt from "bcrypt";
import {
  userStudentAccount,
  AdminAccount,
} from "../Models/studentAccountModel.js";
import UserImgModel from "../Models/imageStudentModel.js";

const SignUp = async (req, res) => {
  const { firstName, middleName, lastName, email, password } = req.body;
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
      first_name: firstName, 
      middle_name: middleName, 
      last_name: lastName, 
      email,
      password: hashedPassword,
    });

    await UserImgModel.create({
      userId: newUserAccount.userId,
    });

    await AdminAccount.create({
      userId: newUserAccount.userId,
      email: newUserAccount.email,
      password,
    });

    return res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default SignUp;
