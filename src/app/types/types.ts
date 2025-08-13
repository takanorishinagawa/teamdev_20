export type Comment = {
  id: number;
  username: string;
  message: string;
  createdAt: string;
  avatar: string;
};

// 投稿データの型を定義
export type Post = {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  thumbnail: string;
};
