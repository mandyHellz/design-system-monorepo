import clsx from "clsx";
import { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
  size?: "sm" | "base" | "lg";
  className?: string;
}

export const Heading = ({
  children,
  size = "base",
  className,
}: HeadingProps) => {
  return (
    <p
      className={clsx(
        "font-bold font-default text-gray-100",
        {
          "text-xl": size === "sm",
          "text-2xl": size === "base",
          "text-4xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </p>
  );
};
