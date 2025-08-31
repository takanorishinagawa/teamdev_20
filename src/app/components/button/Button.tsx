"use client";

import React from "react";

import Link from "next/link";

// ボタンコンポーネント
// 呼び出し側でカラー、サイズを選択

type ButtonProps = {
  href?: string; // ここで受け取る
  variant?: "Blue" | "DarkBlue" | "white";
  size?: "sm" | "md" | "lg";
} & React.ComponentProps<"button">;

const Button = ({
  children,
  href,
  onClick,
  className = "",
  variant = "Blue",
  size = "md",
  ...rest
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
    lg: "px-14 py-5 text-xl font-bold",
  }[size];

  // ボタン共通css
  const baseClass = "transform rounded-full hover:cursor-pointer";

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
    <button onClick={onClick} className={combinedClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
