import { Button } from "@/app/_components/ui/button";
import { db } from "../_lib/prisma";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { transactionColums } from "./_colums";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColums} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
