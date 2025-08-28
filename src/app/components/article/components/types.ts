import type { FieldError, UseFormRegister } from "react-hook-form";

// 投稿日
export type AddDateAreaProps = {
  register: UseFormRegister<any>;
  errors?: FieldError;
};

// 投稿内容
export type ContentAreaProps = {
  defaultContent?: string;
  register: UseFormRegister<any>;
  errors?: FieldError;
};

// カテゴリー選択
export type CategoryAreaProps = {
  defaultCategory?: string;
  register: UseFormRegister<any>;
  errors?: FieldError;
};

// 記事投稿、タイトル入力欄
export type TitleAreaProps = {
  defaultTitle?: string;
  register: UseFormRegister<any>;
  errors?: FieldError;
};
