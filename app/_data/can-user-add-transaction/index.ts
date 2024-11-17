import { auth, clerkClient } from "@clerk/nextjs/server";
import GetCurrentMonthTransactions from "../get-current-month-transactions";

const canUserAddTransaction = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const user = await (await clerkClient()).users.getUser(userId);
  const currentMonthTransactions = await GetCurrentMonthTransactions();

  if (user.publicMetadata.subscriptionPlan === "premium") {
    return true;
  }
  if (currentMonthTransactions >= 10) {
    return false;
  }
  return true;
};

export default canUserAddTransaction;
