import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashBoard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransations from "./_components/last-transactions";
import { ScrollArea } from "../_components/ui/scroll-area";

interface HomeProps {
  searchParams: { month: string };
}

export default async function Home({ searchParams: { month } }: HomeProps) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }

  const dashboard = await getDashBoard(month);

  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 overflow-hidden p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>

          <TimeSelect />
        </div>
        <div className="grid grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <ScrollArea className="flex flex-col overflow-hidden">
            <SummaryCards {...dashboard} />
            <div className="mt-6 grid grid-cols-3 grid-rows-1 gap-6">
              <TransactionsPieChart
                typesPercentage={dashboard.typesPercentage}
                depositsTotal={dashboard.depositsTotal}
                expensesTotal={dashboard.expensesTotal}
                investmentsTotal={dashboard.investmentsTotal}
              />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </ScrollArea>
          <LastTransations lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
}
