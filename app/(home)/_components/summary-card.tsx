import AddTransationButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";

import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  large?: boolean;
  userCanAddTransaction?: boolean;
}

const SummaryCard = ({
  icon,
  title,
  amount,
  large = false,
  userCanAddTransaction,
}: SummaryCardProps) => {
  return (
    <Card className={large ? "bg-white bg-opacity-5" : ""}>
      <CardHeader className="flex-row items-center gap-2">
        {icon}
        <p
          className={large ? "text-white opacity-70" : "text-muted-foreground"}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={`font-bold ${large ? "text-4xl" : "text-2xl"}`}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>
        {large && (
          <AddTransationButton useCanAddTransaction={userCanAddTransaction} />
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
