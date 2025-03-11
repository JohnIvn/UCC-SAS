import db from "../database.js";
import { Sequelize, DataTypes, Model } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

class TeacherAccountModel extends Model {}

const TeacherAccount = TeacherAccountModel.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teacherNumber: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: process.env.DEFAULT_STAFF_ROLE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize: db,
    modelName: "TeacherAccounts",
    tableName: "Teacher_Accounts",
    timestamps: false,
  }
);

export default TeacherAccount;
