import Image from "next/image";

type Comment = {
  id: number;
  username: string;
  message: string;
  timestamp: number;
  avatar: string;
};

export const CommentItem = ({ comment }: { comment: Comment }) => {
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
        <p className="text-sm text-sky-500">{comment.timestamp}min ago</p>
      </div>
    </div>
  );
};
