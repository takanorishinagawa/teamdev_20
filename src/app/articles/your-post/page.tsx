"use client";

import { useEffect, useState } from "react";

import useUserStore from "@/store/useUserStore";

import { PostPaginatedItems } from "@/app/components/pagination/PostPaginatedItems";
import type { Post } from "@/app/types/types";

import { createClient } from "@/utils/supabase/clients";

// ダミーデータ　長さ9の空配列 [undefined, undefined, ...] を作る
// TODO supabaseから取得
// const dummyPosts: Post[] = Array.from({ length: 30 }).map((_, i) => ({
//   id: i + 1,
//   title: `Post Title ${i + 1}`,
//   category: "Category",
//   author: "Author",
//   date: "5 min ago",
//   thumbnail: "https://via.placeholder.com/300x200",
// }));

const YourPost = () => {
  // TODO 記事投稿内容実装次第変更すること。
  // const items = dummyPosts;
  const supabase = createClient();
  const { user } = useUserStore();
  const [items, setItems] = useState<Post[]>([]);

  // supabaseから情報取得
  useEffect(() => {
    console.log("✅ fetchRecord 実行");

    const fetchRecord = async () => {
      if (!user?.id) return;

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error || !data) {
        console.error("データ取得失敗", error);
        return;
      }

      // Supabaseのデータをstateに反映
      setItems(
        data.map((row: any) => ({
          id: row.id,
          title: row.title,
          category: row.category,
          author: user.name,
          date: new Date(row.created_at)
            .toISOString()
            .slice(0, 16) // "2025-08-19T12:53"
            .replace("T", "_"), // "2025-08-19_12:53",
          thumbnail: row.image_path[0],
        })),
      );

      console.log("✅ Supabaseデータ取得成功:", data);
    };

    fetchRecord();
  }, [user?.id, supabase]);

  return (
    <>
      <main className="p-8">
        <div className="flex flex-col gap-10">
          {/* タイトル */}
          <div className="flex items-center justify-center text-3xl">
            <h2 className="font-semibold">Your Post</h2>
          </div>

          {/* ページネーション */}
          <PostPaginatedItems items={items} itemsPerPage={9} />
        </div>
      </main>
    </>
  );
};

export default YourPost;
