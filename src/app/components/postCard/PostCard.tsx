//型定義などで React.FC を使うので読み込む
import Image from "next/image";
import { useRouter } from "next/navigation";

import type { Post } from "@/app/types/types";

//PostCard コンポーネントには post という名前で Post 型のデータが渡ってくる
export interface PostCardProps {
  post: Post;
}

//props.post.title という二重構造になる。型の書き方はchildren を勝手に含まないので意図しない props を受け取らない。React 公式もこちらを推奨
const PostCard = ({ post }: PostCardProps) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(`/articles/${post.id}`)}
      className="cursor-pointer rounded-lg border p-3 shadow transition duration-300 hover:-translate-y-1 hover:shadow-md"
    >
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
      <div className="flex gap-5 text-sm text-gray-500">
        <div>{post.author} </div>
        <div>{post.date}</div>
      </div>
    </button>
  );
};

export default PostCard;
