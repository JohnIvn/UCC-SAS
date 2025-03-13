import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import TeacherAccount from "./userTeacherModel.js";

class imageTeacherModel extends Model {}

const imageTeacher = imageTeacherModel.init(
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
        model: TeacherAccount,
        key: "userId",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: TeacherAccount,
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
    modelName: "imageTeacherModel",
    tableName: "Teacher_Account_Img",
    timestamps: true,
  }
);

export default imageTeacher;
