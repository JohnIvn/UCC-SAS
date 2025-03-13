import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import { userStudentAccount } from "./studentAccountModel.js";

class studentSubjectsModel extends Model {}

const studentSubjects = studentSubjectsModel.init(
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
    studentNumber: {
        type: DataTypes.STRING,
        references: {
          model: userStudentAccount,
          key: "studentNumber",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    section: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: userStudentAccount,
          key: "section",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    subject1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "studentSubjectsModel",
    tableName: "Student_Account_Subjects",
    timestamps: true,
  }
);

export default studentSubjects;
