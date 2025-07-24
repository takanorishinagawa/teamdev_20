import Image from "next/image";
import { Comment } from "../../types/comment";

export const CommentItem = ({ comment }: { comment: Comment }) => {
  // コメント記入日→何分前かを変換する
  const formatTimeAgo = (createdAt: string): string => {
    const created = new Date(createdAt);
    const now = new Date();
    const diffMs = now.getTime() - created.getTime(); // 現在と作成日の差をミリ秒で計算
    const diffMinutes = Math.floor(diffMs / 1000 / 60); // 分に変換
    const diffHours = Math.floor(diffMinutes / 60); // 時間に変換
    const diffDays = Math.floor(diffHours / 24); // 日に変換

    // 何分前、何時間前、何日前かを返す（2以上の時は複数形）
    if (diffMinutes < 1) return "just now";
    if (diffMinutes < 60)
      return `${diffMinutes} min${diffMinutes === 1 ? "" : "s"} ago`;
    if (diffHours < 24)
      return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
    return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  };

  return (
    <div className="flex items-center space-x-8 rounded-md bg-gray-100 p-6 shadow-md">
      <div className="w-[70px] flex-shrink-0 text-center">
        <Image
          src={comment.avatar}
          alt="ユーザーアイコン"
          width={50}
          height={50}
          className="mx-auto"
        />
        <p className="mt-2 text-sm text-gray-600">{comment.username}</p>
      </div>
      <div className="space-y-2">
        <p className="text-gray-800">{comment.message}</p>
        <p className="text-sm text-sky-500">
          {formatTimeAgo(comment.createdAt)}
        </p>
      </div>
    </div>
  );
};
