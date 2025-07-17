// 長方形のボタン用

import React from "react";

type RectButtonProps = {
  children: string;
};

const RectButton = ({ children }: RectButtonProps) => {
  return (
    <button className="bg-sky-500 text-white shadow-md duration-300 hover:-translate-y-1 hover:bg-sky-300 py-3 px-2 w-[280px] h-[50px]">
      {children}
    </button>
  );
};

export default RectButton;
