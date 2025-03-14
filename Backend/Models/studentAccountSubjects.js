import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import { userStudentAccount } from "./studentAccountModel.js";
import Subject from "./subjectsModel.js";

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
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject1_attendance: {
      unique: true,
      type: DataTypes.STRING,
    },
    subject2: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject2_attendance: {
      unique: true,
      type: DataTypes.STRING,
    },
    subject3: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject3_attendance: {
      unique: true,
      type: DataTypes.STRING,
    },
    subject4: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject4_attendance: {
      unique: true,
      type: DataTypes.STRING,
    },
    subject5: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject5_attendance: {
      unique: true,
      type: DataTypes.STRING,
    },
    subject6: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject6_attendance: {
      unique: true,
      type: DataTypes.STRING,
    },
    subject7: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject7_attendance: {
      unique: true,
      type: DataTypes.STRING,
    },
    subject8: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Subject,
        key: "subject_code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject8_attendance: {
      unique: true,
      type: DataTypes.STRING,
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
