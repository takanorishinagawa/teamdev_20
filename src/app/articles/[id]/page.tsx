"use client";

import { use, useEffect, useState } from "react";

import Image from "next/image";

import Button from "@/app/components/button/Button";
import { CommentItem } from "@/app/components/comment/CommentItem";
import { PostState } from "@/app/types/post";

import { createClient } from "@/utils/supabase/clients";

import { Comment } from "../../types/types";

export default function ArticlePage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = use(params);
  const [post, setPost] = useState<PostState>();

  async function fetchPostData() {
    const supabase = createClient();
    const { data } = await supabase
      .from("posts")
      .select(
        `
        *,
        users (*),
        categories (*)
      `,
      )
      .eq("id", id)
      .single();

    if (data) {
      setPost(data as PostState);
    }
  }

  useEffect(() => {
    fetchPostData();
  }, []);

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
        <div className="flex items-center justify-between">
          <h1 className="font-bold" style={{ fontSize: "30px" }}>
            {post?.title}
          </h1>
          <div>
            {post && post.users && post.users.image_path && (
              <Image
                src={post.users.image_path ? post.users.image_path : "/images/user-image.png"}
                alt="ユーザーアイコン"
                width={32}
                height={32}
              />
            )}
          </div>
        </div>
        {/* 記事画像 */}
        <div className="relative min-h-[300px] w-full">
          {Array.isArray(post?.image_path) &&
            post.image_path.length > 0 &&
            typeof post.image_path[0] === "string" && (
              <Image
                src={post.image_path[0]}
                alt="記事画像"
                fill
                className="rounded object-cover"
              />
            )}
        </div>
        {/* 本文 */}
        <p className="text-gray-800">{post?.content}</p>
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
