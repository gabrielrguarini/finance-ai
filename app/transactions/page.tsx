import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColums } from "./_colums";
import AddTransationButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransationButton />
        </div>
        <DataTable
          columns={transactionColums}
          data={JSON.parse(JSON.stringify(transactions))}
        />
      </div>
    </>
  );
};

export default TransactionsPage;
