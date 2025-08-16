// 長方形のボタン用
import React from "react";

type RectButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<"button">;

const RectButton = ({ children, ...props }: RectButtonProps) => {
  return (
    <button
      className="rounded-md bg-sky-500 px-14 py-4 text-xl text-white shadow-md duration-300 hover:-translate-y-1 hover:bg-sky-300"
      {...props}
    >
      {children}
    </button>
  );
};

export default RectButton;
