import { userStudentAccount } from "./studentAccountModel";
import { AdminAccount } from "./studentAccountModel";
import UserImgModel from "./imageStudentModel";
import SectionModel from "./sectionModel";
import SubjectModel from "./subjectsModel";

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

UserImgModel.belongsTo(userStudentAccount, {
  foreignKey: "userId",
});

userStudentAccount.hasOne(UserImgModel, {
  foreignKey: "userId",
});

UserImgModel.belongsTo(userStudentAccount, {
  foreignKey: "email",
});

userStudentAccount.hasOne(UserImgModel, {
  foreignKey: "email",
});
