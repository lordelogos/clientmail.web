import { Card } from "../ui/card";
import { FC, ReactNode } from "react";
import clsx from "clsx";

interface BaseCardProps {
  name: string;
  icon: ReactNode;
  children: ReactNode;
  fluid?: boolean;
}

export const BaseCard: FC<BaseCardProps> = ({
  name,
  icon: Icon,
  children,
  fluid,
}) => {
  return (
    <Card
      className={clsx("flex flex-col w-full  py-4 px-6", {
        "max-w-[400px]": !fluid,
        "max-w-full": fluid,
      })}
    >
      <div className="flex items-center justify-between w-full mb-5">
        <p className="text-slate-700 dark:text-slate-400">{name}</p>
        <div className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded">
          {Icon}
        </div>
      </div>
      {children}
    </Card>
  );
};
