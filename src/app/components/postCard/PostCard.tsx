import Image from "next/image";
import Link from "next/link";

import { PostState } from "@/app/types/post";

type PostCardProps = {
  post: PostState;
};

const PostCard = ({ post }: PostCardProps) => {
  console.log(post);
  
  return (
    <Link
      href={`/articles/${post.id}`}
      className="rounded-lg border p-3 shadow transition hover:shadow-md cursor-pointer"
    >
      <Image
        src={post?.thumbnail ?? "/images/articleDetail/sample-image.jpg"}
        src={"/images/articleDetail/sample-image.jpg"}
        alt={post.title}
        width={300}
        height={200}
        className="h-40 w-full rounded-md object-cover"
      />

      <div className="mt-2 flex items-center justify-between">
        <h2 className="font-semibold">{post.title}</h2>
        <span className="text-sm text-blue-500">{post.category}</span>
      </div>

      <p className="text-sm text-gray-500">
        {post.author} ・ {post.date}
      </p>
    </Link>
  );
};

export default PostCard;
