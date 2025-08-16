"use client";

import Image from "next/image";

import Button from "@/app/components/button/Button";
import { CommentItem } from "@/app/components/comment/CommentItem";

import { Comment } from "../../types/types";

export default function page() {
  // ダミー記事
  const post = {
    title: "Blog Title",
    userIcon: "/images/user-image.png",
    postImage: "/images/articleDetail/sample-image.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus debitis necessitatibus perferendis ea, eligendi iusto doloribus quo reprehenderit explicabo, voluptatem incidunt repellat, facilis quaerat! Eveniet maxime, dolorum laboriosam harum earum unde laborum? Consequatur nihil mollitia magnam cupiditate, iste fuga excepturi rem officiis minus beatae! Nulla adipisci numquam commodi minima.",
  };

  // ダミーコメント
  const comments: Comment[] = [
    {
      id: 1,
      username: "user1",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae quia reiciendis fugit facere veritatis.",
      createdAt: "2025-07-24T06:30:00.000Z", // コメント記入日
      avatar: "/images/user-image.png",
    },
    {
      id: 2,
      username: "user2",
      message:
        "Reiciendis fugit facere veritatis quisquam porro iusto odit conseq untur pariatur.",
      createdAt: "2025-07-24T05:30:00.000Z",
      avatar: "/images/user-image.png",
    },
  ];
  return (
    <>
      <div className="mx-auto my-8 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-10 shadow-md">
        {/* 記事タイトルとユーザーアイコン */}
        <div className="flex justify-between">
          <h1 className="font-bold" style={{ fontSize: "30px" }}>
            {post.title}
          </h1>
          <div>
            <Image
              src={post.userIcon}
              alt="ユーザーアイコン"
              width={50}
              height={50}
            />
          </div>
        </div>
        {/* 記事画像 */}
        <div className="relative h-[400px] w-full">
          <Image
            src={post.postImage}
            alt="記事画像"
            fill
            className="rounded object-cover"
          />
        </div>
        {/* 本文 */}
        <p className="text-gray-800">{post.content}</p>
      </div>

      {/* コメントエリア */}
      <div className="mx-auto my-8 max-w-[750px] space-y-4 px-20">
        <h2 className="text-xl">Comments</h2>
        {/* 入力欄 */}
        <div className="flex justify-between">
          <label htmlFor="comment" className="sr-only">
            コメント
          </label>
          <input
            type="text"
            id="comment"
            name="comment"
            placeholder="Your Comment..."
            className="mr-5 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />
          <Button type="submit" size="sm">
            Comment
          </Button>
        </div>
        {/* コメント一覧 */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
}
