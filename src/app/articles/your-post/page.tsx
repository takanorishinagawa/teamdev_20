"use client";
import PostCard, { Post } from "@/app/components/postCard/PostCard";

// ダミーデータ　長さ9の空配列 [undefined, undefined, ...] を作る
const dummyPosts: Post[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Post Title ${i + 1}`,
  category: "Category",
  author: "Author",
  date: "5 min ago",
  thumbnail: "https://via.placeholder.com/300x200",
}));

const YourPost = () => {
  return (
    <>
      <main className="p-8">
        <div className="flex flex-col gap-10">
          {/* タイトル */}
          <div className="flex items-center justify-center text-2xl">
            <h2>Your Post</h2>
          </div>

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
        </div>
      </main>
    </>
  );
};

export default YourPost;
