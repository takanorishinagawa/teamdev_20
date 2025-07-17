"use client";

// ボタンコンポーネント
// 呼び出し側でカラー、サイズを選択

import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string; 
  onClick?: () => void;
  className?: string;
  variant?: "Blue" | "DarkBlue" | "white";
  size?: "sm" | "md" | "lg";
};

const Button = ({
  children,
  href,
  onClick,
  className = "",
  variant = "Blue",
  size = "md",
}: ButtonProps) => {
  // ボタンカラー選択
  const variantClass = {
    Blue: "bg-sky-500 text-white shadow-md duration-300 hover:-translate-y-1 hover:bg-sky-300",
    DarkBlue:
      "bg-blue-500 text-white duration-300 hover:-translate-y-0.5 hover:bg-blue-300",
    white:
      "border-2 border-blue-500 text-blue-600 duration-300 hover:-translate-y-0.5 hover:bg-white",
  }[variant];

  // ボタンサイズ選択
  const sizeClass = {
    // 最小（ヘッダー、SP画面など）
    sm: "px-8 py-2",

    // 中間（サインアップ、ログインボタンなど）
    md: "px-10 py-3 text-xl font-bold",

    // 最大（記事投稿ボタンなど）
    lg: "px-10 py-5 text-2xl font-bold",
  }[size];

  // ボタン共通css
  const baseClass = "transform rounded-full";

  // 全てのcssまとめ
  const combinedClass = `${variantClass} ${sizeClass} ${baseClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
};

export default Button;
