import { ReactNode } from "react";
interface PercentageItemProps {
  value: number;
  title: string;
  icon: ReactNode;
}
const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="items-center-gap-2 flex">
        {icon}
        <p>{title}</p>
      </div>
      <p className="text-sm font-bold">{value} %</p>
    </div>
  );
};

export default PercentageItem;
