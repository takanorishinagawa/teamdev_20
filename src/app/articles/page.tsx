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
    <main className="max-w-6xl mx-auto p-4">
      {/* ヘッダー */}
      {/* <header className="flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">My Blog</h1>
        <div className="space-x-2">
          <button className="px-4 py-2 border rounded">Login</button>
          <button className="px-4 py-2 bg-black text-white rounded">
            Sign Up
          </button>
        </div>
      </header> */}
      <Header/>

      <section className="flex justify-center my-6">
        <div className="relative w-full md:w-2/3">
          {/* 検索バー */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 pl-4 pr-12 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* 虫眼鏡アイコン */}
        </div>
        <span className="ml-3 inset-y-0 right-4 flex items-center text-gray-500">
          🔍
        </span>
      </section>

      {/* 投稿カードのグリッド */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </section>

      {/* ページネーション */}
    </main>
  );
};

export default Home;
