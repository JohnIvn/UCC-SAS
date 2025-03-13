import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import { userStudentAccount } from "./userStudentAccountModel.js";

class UserImgModel extends Model {}

const userImg = UserImgModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: userStudentAccount,
        key: "userId",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: userStudentAccount,
        key: "email",
      },
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "UserImgModel",
    tableName: "Student_Account_Img",
    timestamps: true,
  }
);

export default userImg;
