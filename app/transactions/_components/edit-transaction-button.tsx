"use client";
import { useState } from "react";
import { PencilIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";

interface EditTransationButtonProps {
  transaction: Transaction;
}

const EditTransationButton = ({ transaction }: EditTransationButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setDialogIsOpen(true)}
        variant={"ghost"}
        className="text-muted-foreground"
        size={"icon"}
      >
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog
        setIsOpen={setDialogIsOpen}
        isOpen={dialogIsOpen}
        deafaultValues={{ ...transaction, amount: Number(transaction.amount) }}
        transactionId={transaction.id}
      />
    </>
  );
};

export default EditTransationButton;
