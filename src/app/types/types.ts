// 記事表示コメント用型定義
export type Comment = {
  id: number;
  username: string;
  message: string;
  createdAt: string;
  avatar: string;
};

// 投稿データ用型定義
export type Post = {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  thumbnail: string;
};

// 記事表示フォーム用型定義
export type ArticleFormProps = {
  defaultTitle?: string;
  defaultContent?: string;
  defaultCategory?: string;
  defaultCreated_at?: string;
};

// 記事投稿時の画像処理用：ImageFields.tsx
export type ImageFieldProps = {
  value: File[];
  // maxFiles?: number; // 登録できる上限枚数
  error?: string;
  onChange?: (files: File[] | FileList | null) => void;
};
