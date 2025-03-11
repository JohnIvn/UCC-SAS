import UserAccount from "../Models/userAccountModel.js";

async function createTableUserAccounts() {
  try {
    await UserAccount.sync({ alter: false });
    console.log("UserAccount table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating UserAccount table", error);
  }
}

export { createTableUserAccounts };
