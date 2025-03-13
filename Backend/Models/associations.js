import { userStudentAccount } from "./userStudentAccountModel";
import { AdminAccount } from "./userStudentAccountModel";
import UserImgModel from "./imageModel";

userStudentAccount.hasOne(AdminAccount, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  AdminAccount.belongsTo(userStudentAccount, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
  });


  UserImgModel.belongsTo(userStudentAccount, { foreignKey: "userId" });
  userStudentAccount.hasOne(UserImgModel, { foreignKey: "userId" });
  
  UserImgModel.belongsTo(userStudentAccount, { foreignKey: "email" });
  userStudentAccount.hasOne(UserImgModel, { foreignKey: "email" });