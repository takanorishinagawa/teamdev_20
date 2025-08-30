"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import useUserStore from "@/store/useUserStore";

import Button from "@/app/components/button/Button";

import { createClient } from "@/utils/supabase/clients";

export type Post = {
  id: number;
  title?: string;
  content?: string;
  image_path?: string[];
  category_id?: number;
  created_at: string;
  user_id?: string;
};

export default function page() {
  const router = useRouter();
  const supabase = createClient();
  const { user } = useUserStore();

  const params = useParams();
  const rawId = params?.id as string;
  const postId = Number(rawId);

  const [post, setPost] = useState<Post | undefined>(undefined);

  useEffect(() => {
    const fetchPost = async () => {
      if (!user?.id) return;

      console.log("現在のログインユーザー:", user);

      const { data: PostData, error: PostError } = await supabase
        .from("posts")
        .select(
          "id, category_id, title, content, image_path, created_at,user_id",
        )
        .eq("id", postId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (PostError) {
        console.error("post取得エラー", PostError);
        return;
      }

      if (
        PostData &&
        PostData.title !== null &&
        PostData.content !== null &&
        PostData.image_path !== null
      ) {
        setPost({
          id: PostData.id,
          title: PostData.title,
          content: PostData.content,
          image_path: (PostData.image_path as string[]) ?? [],
          created_at: new Date(PostData.created_at)
            .toISOString()
            .slice(0, 16) // "2025-08-19T12:53"
            .replace("T", "_"), // "2025-08-19_12:53",
          user_id: PostData.user_id ?? undefined,
          category_id: PostData.category_id ?? undefined, // ← 追加
        });
      }
    };

    fetchPost();
  }, [user?.id]);

  return (
    <>
      <div className="mx-auto mt-10 flex flex-col gap-10 rounded-xl border border-gray-200 bg-gray-50 p-10 shadow-md">
        {/* 記事タイトルとユーザーアイコン */}
        <div className="flex justify-between">
          <h1 className="font-bold" style={{ fontSize: "30px" }}>
            {post?.title}
          </h1>

          <Button
            type="button"
            size="sm"
            onClick={() => router.push(`/articles/${post?.id}/edit/`)}
          >
            Edit
          </Button>

          {/* TODO ユーザーアイコン */}
          {/* <div>
            <Image
              src={post.userIcon}
              alt="ユーザーアイコン"
              width={50}
              height={50}
            />
          </div> */}
        </div>

        <div className="flex gap-5">
          {/* 日付 */}
          <div>{post?.created_at}</div>
          {/* カテゴリー */}
          {/* TODO idの表示になっているため、修正必要 */}
          <div>{post?.category_id}</div>
        </div>

        {/* 記事画像 */}
        {post?.image_path?.[0] && (
          <div className="relative h-[400px] w-full">
            <Image
              src={post.image_path[0]} // 配列の最初の画像だけ
              alt="記事画像"
              fill
              className="rounded object-cover"
            />
          </div>
        )}
        {/* 本文 */}
        <p className="text-2xl text-gray-800">{post?.content}</p>
      </div>

      {/* TODOコメントエリア */}
      {/* <div className="mx-auto my-8 max-w-[750px] space-y-4 px-20">
        <h2 className="text-xl">Comments</h2>
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

        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div> */}
    </>
  );
}
