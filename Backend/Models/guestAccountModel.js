import { DataTypes, Model } from "sequelize";
import db from "../database.js";

class GuestModel extends Model {}

const Guest = GuestModel.init(
  {
    Guest_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "GuestModel",
    tableName: "Guest_Accounts",
    timestamps: true,
  }
);

export default Guest;
