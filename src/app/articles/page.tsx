"use client";

import { useEffect, useState } from "react";

import PostCard from "@/app/components/postCard/PostCard";

import { createClient } from "@/utils/supabase/clients";

import type { PostState } from "../types/post";

export default function Home() {
  const [posts, setPosts] = useState<PostState[] | null>([]);

  async function fetchPostsData() {
    const supabase = createClient();
    const { data } = await supabase.from("posts").select(`
      *,
      users (
        *
      ),
      categories (
        *
      )
    `);

    setPosts(data);
  }

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <>
      <main className="p-8">
        <section className="my-6 flex justify-center gap-3">
          {/* 検索バー */}
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border p-3 focus:ring-blue-400"
            />
          </div>

          {/* 検索バーのすぐ右に虫眼鏡アイコン */}
          <span
            className="flex cursor-pointer items-center transition duration-200 hover:-translate-y-1"
            onClick={() => alert("検索アイコンがクリックされました！")}
          >
            🔍
          </span>
        </section>

        {/* 投稿カードのグリッド */}
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>

        {/* ページネーション */}
        <div className="my-6 flex justify-center">
          <p>ページネーション</p>
        </div>
      </main>
    </>
  );
}
