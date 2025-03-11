import UserAccount from "../Models/userAccountModel.js";
import ImageModel from "../Models/imageModel.js";

async function createTableUserAccounts() {
  try {
    await UserAccount.sync({ alter: false });
    console.log("UserAccount table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating UserAccount table", error);
  }
}

async function createTableImageTable() {
    try {
      await ImageModel.sync({ alter: false });
      console.log("Image table is checked and updated if necessary");
    } catch (error) {
      console.error("Error checking/updating UserAccount table", error);
    }
  }

export { createTableUserAccounts, createTableImageTable };
