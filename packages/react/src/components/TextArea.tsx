import { InputHTMLAttributes } from "react";

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = ({ ...props }: TextAreaProps) => {
  return (
    <textarea
      className="bg-gray-900 py-3 px-4 rounded border-2 border-gray-900 
      font-default text-sm text-white resize-y min-h-80 focus:outline-none
      focus:border-green-300 placeholder:text-gray-400 disabled:opacity-20 disabled:cursor-not-allowed"
      {...props}
    ></textarea>
  );
};
