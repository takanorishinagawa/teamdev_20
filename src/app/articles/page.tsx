"use client";
import PostCard, { Post } from "@/app/components/postCard/PostCard";
import Header from "../components/header/Header";

// ダミーデータ
const dummyPosts: Post[] = Array.from({ length: 9 }).map((_, i) => ({
  title: `Post Title ${i + 1}`,
  category: "Category",
  author: "Author",
  date: "5 min ago",
  thumbnail: "https://via.placeholder.com/300x200",
}));

const Home = () => {
  return (
    <>
      <Header />

      <main className="p-8">
        <section className="flex justify-center my-6 gap-3">
          {/* flex items-center */}
          {/* 検索バー */}
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border rounded-full focus:ring-blue-400"
            />
          </div>

          {/* 検索バーのすぐ右に虫眼鏡アイコン */}
          <span
            className="
                flex items-center
                cursor-pointer 
                transition duration-200 
                hover:-translate-y-1
              "
            onClick={() => alert("検索アイコンがクリックされました！")}
          >
            🔍
          </span>
          {/* </div> */}
        </section>

        {/* 投稿カードのグリッド */}
        <section
          className="
            grid 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-6
            cursor-pointer
          "
        >
          {dummyPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </section>

        {/* ページネーション */}
        <div className="flex justify-center my-6">
          <p>ページネーション</p>
        </div>
      </main>
    </>
  );
};

export default Home;
