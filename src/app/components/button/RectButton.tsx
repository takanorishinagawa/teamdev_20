// 長方形のボタン用

import React from "react";

type RectButtonProps = {
  children: string;
  onClick?: () => void;
};

const RectButton = ({ children, onClick }: RectButtonProps) => {
  return (
    <button
      className="h-[50px] w-[280px] rounded-md bg-sky-500 px-2 py-3 text-white shadow-md duration-300 hover:-translate-y-1 hover:bg-sky-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RectButton;
