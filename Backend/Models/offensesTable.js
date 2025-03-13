import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import { userStudentAccount } from "./studentAccountModel.js";
import studentSubjects from "./studentAccountSubjects.js";

class OffensesModel extends Model {}

const Offenses = OffensesModel.init(
  {
    Offenses_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    subject1_attendance: {
      type: DataTypes.INTEGER,
      references: {
        model: studentSubjects,
        key: "subject1_attendance",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject1_offense: {
      type: DataTypes.INTEGER,
    },
    subject2_attendance: {
      type: DataTypes.INTEGER,
      references: {
        model: studentSubjects,
        key: "subject2_attendance",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject2_offense: {
      type: DataTypes.INTEGER,
    },
    subject3_attendance: {
      type: DataTypes.INTEGER,
      references: {
        model: studentSubjects,
        key: "subject3_attendance",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject3_offense: {
      type: DataTypes.INTEGER,
    },
    subject4_attendance: {
      type: DataTypes.INTEGER,
      references: {
        model: studentSubjects,
        key: "subject4_attendance",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject4_offense: {
      type: DataTypes.INTEGER,
    },
    subject5_attendance: {
      type: DataTypes.INTEGER,
      references: {
        model: studentSubjects,
        key: "subject5_attendance",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject5_offense: {
      type: DataTypes.INTEGER,
    },
    subject6_attendance: {
      type: DataTypes.INTEGER,
      references: {
        model: studentSubjects,
        key: "subject6_attendance",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject6_offense: {
      type: DataTypes.INTEGER,
    },
    subject7_attendance: {
      type: DataTypes.INTEGER,
      references: {
        model: studentSubjects,
        key: "subject7_attendance",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject7_offense: {
      type: DataTypes.INTEGER,
    },
    subject8_attendance: {
      type: DataTypes.INTEGER,
      references: {
        model: studentSubjects,
        key: "subject8_attendance",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    subject8_offense: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "OffensesModel",
    tableName: "Offenses_Table",
    timestamps: true,
  }
);

export default Offenses;
