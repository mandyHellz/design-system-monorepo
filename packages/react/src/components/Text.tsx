import clsx from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  className?: string;
}

export const Text = ({ children, size = "base", className }: TextProps) => {
  return (
    <p
      className={clsx(
        "font-default text-gray-100 m-0",
        {
          "text-xs": size === "xs",
          "text-sm": size === "sm",
          "text-base": size === "base",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
          "text-2xl": size === "2xl",
          "text-4xl": size === "4xl",
          "text-5xl": size === "5xl",
          "text-6xl": size === "6xl",
          "text-7xl": size === "7xl",
          "text-8xl": size === "8xl",
          "text-9xl": size === "9xl",
        },
        className
      )}
    >
      {children}
    </p>
  );
};
