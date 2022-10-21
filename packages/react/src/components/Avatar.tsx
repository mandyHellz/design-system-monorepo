import { ImgHTMLAttributes } from "react";
import { User } from "phosphor-react";

export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isLoggedOut: boolean;
}

export const Avatar = ({
  children,
  isLoggedOut,
  ...props
}: AvatarImageProps) => {
  return (
    <div
      className={`rounded-full w-12 h-12 overflow-hidden ${
        isLoggedOut
          ? "bg-gray-600 text-gray-800 flex items-center justify-center"
          : ""
      }`}
    >
      {isLoggedOut ? (
        <User className="w-6 h-6" />
      ) : (
        <img
          src=""
          alt="avatar"
          className="w-full h-full object-cover rounded-full"
          {...props}
        />
      )}
    </div>
  );
};
