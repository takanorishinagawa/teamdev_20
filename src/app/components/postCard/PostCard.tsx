//型定義などで React.FC を使うので読み込む
import React from "react";
import Image from "next/image";

// 投稿データの型を定義
export interface Post {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  thumbnail: string;
}

//PostCard コンポーネントには post という名前で Post 型のデータが渡ってくる
export interface PostCardProps {
  post: Post;
}

//props.post.title という二重構造になる。型の書き方はchildren を勝手に含まないので意図しない props を受け取らない。React 公式もこちらを推奨
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="rounded-lg border p-3 shadow transition hover:shadow-md">
      {/* サムネイル */}
      <Image
        src={post.thumbnail}
        alt={post.title}
        width={300}
        height={200}
        className="h-40 w-full rounded-md object-cover"
      />

      {/* タイトルとカテゴリ */}
      <div className="mt-2 flex items-center justify-between">
        <h2 className="font-semibold">{post.title}</h2>
        <span className="text-sm text-blue-500">{post.category}</span>
      </div>

      {/* 著者と時間 */}
      <p className="text-sm text-gray-500">
        {post.author} ・ {post.date}
      </p>
    </div>
  );
};

export default PostCard;
