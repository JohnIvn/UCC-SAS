import { DataTypes, Model } from "sequelize";
import db from "../database.js";
import TeacherAccount from "./userStudentAccountModel.js";

class UserImgModel extends Model {}

UserImgModel.init(
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
    imagePath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "UserImgModel",
    tableName: "user_Account_Img",
    timestamps: false,
  }
);

UserImgModel.belongsTo(TeacherAccount, { foreignKey: "userId" });
TeacherAccount.hasOne(UserImgModel, { foreignKey: "userId" });

export default UserImgModel;
