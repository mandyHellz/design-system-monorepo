import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import "../styles/styles.css";

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants: "primary" | "secondary" | "tertiary";
  children: ReactNode;
  isDisabled?: boolean;
}

export interface ButtonIconProps {
  children: ReactNode;
}

const ButtonRoot = ({
  variants = "primary",
  children,
  ...props
}: ButtonRootProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "font-default min-w-30 text-sm font-medium px-4 py-2 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed rounded",
        {
          "text-white bg-green-500 hover:bg-green-300 disabled:bg-gray-200 disabled:hover:bg-gray-200":
            variants === "primary",
          "text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white disabled:hover:bg-transparent disabled:text-gray-200 disabled:border-gray-200":
            variants === "secondary",
          "text-gray-200 hover:text-white disabled:text-gray-600 disabled:hover:text-gray-600":
            variants === "tertiary",
        }
      )}
    >
      {children}
    </button>
  );
};

const ButtonIcon = ({ children }: ButtonIconProps) => {
  return <div className="w-6 h-6 text-gray-400">{children}</div>;
};

ButtonRoot.displayName = "Button.Root";
ButtonIcon.displayName = "Button.Icon";

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
};
