import { ReactNode } from "react";
interface PercentageItemProps {
  value: number;
  title: string;
  icon: ReactNode;
}
const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-white bg-opacity-[3%] p-2">{icon}</div>
        <p>{title}</p>
      </div>
      <p className="text-sm font-bold">{value} %</p>
    </div>
  );
};

export default PercentageItem;