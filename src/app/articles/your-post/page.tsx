"use client";

import { PostPaginatedItems } from "@/app/components/pagination/PostPaginatedItems";
import type { Post } from "@/app/types/types";

// ダミーデータ　長さ9の空配列 [undefined, undefined, ...] を作る
const dummyPosts: Post[] = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  title: `Post Title ${i + 1}`,
  category: "Category",
  author: "Author",
  date: "5 min ago",
  thumbnail: "https://via.placeholder.com/300x200",
}));

const YourPost = () => {
  // TODO 記事投稿内容実装次第変更すること。
  const items = dummyPosts;

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
