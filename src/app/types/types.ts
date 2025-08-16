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
  type: "create" | "edit";
  onSubmit: () => void;
  defaultTitle?: string;
  defaultContent?: string;
  defaultCategory?: string;
};
