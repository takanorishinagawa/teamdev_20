//型定義などで React.FC を使うので読み込む
import React from "react";

// 投稿データの型を定義
export interface Post {
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

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    //rounded-lg → 少し角を丸める
    <div className="border rounded-lg p-3 shadow hover:shadow-md transition">
      {/* サムネイル */}
      <img
        src={post.thumbnail}
        alt={post.title}
        //object-cover → 画像が縦横比を保ったまま枠いっぱいに収まる
        className="w-full h-40 object-cover rounded-md"
      />

      {/* タイトルとカテゴリ */}
      <div className="flex justify-between items-center mt-2">
        <h2 className="font-semibold">{post.title}</h2>
        <span className="text-blue-500 text-sm">{post.category}</span>
      </div>

      {/* 著者と時間 */}
      <p className="text-gray-500 text-sm">
        {post.author} ・ {post.date}
      </p>
    </div>
  );
}

export default PostCard;