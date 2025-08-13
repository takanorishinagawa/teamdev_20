"use client";

import PostCard, { Post } from "@/app/components/postCard/PostCard";

// ダミーデータ　長さ9の空配列 [undefined, undefined, ...] を作る
const dummyPosts: Post[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Post Title ${i + 1}`,
  category: "Category",
  author: "Author",
  date: "5 min ago",
  thumbnail: "https://via.placeholder.com/300x200",
}));

const Home = () => {
  // TODO 記事投稿内容実装次第変更すること。
  const items = dummyPosts;

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
        <section className="grid cursor-pointer gap-6 sm:grid-cols-2 md:grid-cols-3">
          {dummyPosts.map((post) => (
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
};

export default Home;
