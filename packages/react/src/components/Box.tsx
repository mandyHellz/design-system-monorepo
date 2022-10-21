import clsx from "clsx";
import { ReactNode } from "react";

export interface BoxProps {
  children: ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={clsx(
        "p-4 rounded-md bg-gray-800 border border-gray-600",
        className
      )}
    >
      {children}
    </div>
  );
};
