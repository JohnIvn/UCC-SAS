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
    tableName: "user_Account_Img",
    timestamps: true,
  }
);

UserImgModel.belongsTo(userStudentAccount, { foreignKey: "userId" });
userStudentAccount.hasOne(UserImgModel, { foreignKey: "userId" });

UserImgModel.belongsTo(userStudentAccount, { foreignKey: "email" });
userStudentAccount.hasOne(UserImgModel, { foreignKey: "email" });

export default userImg;
