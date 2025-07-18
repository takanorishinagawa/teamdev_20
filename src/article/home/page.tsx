import PostCard, { Post } from "../../app/components/PostCard";

const Home = () => {
  // ダミーデータ
  const dummyPosts: Post[] = Array.from({ length: 9 }).map((_, i) => ({
    title: `Post Title ${i + 1}`,
    category: "Category",
    author: "Author",
    date: "5 min ago",
    thumbnail: "https://via.placeholder.com/300x200",
  }));

  return (
    <main className="max-w-6xl mx-auto p-4">
      {/* ヘッダー */}
      <header className="flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">My Blog</h1>
        <div className="space-x-2">
          <button className="px-4 py-2 border rounded">Login</button>
          <button className="px-4 py-2 bg-black text-white rounded">Sign Up</button>
        </div>
      </header>

      <section className="flex justify-center my-6">
        <div className="relative w-2/3">
          {/* 検索バー */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 pl-4 pr-10 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          {/* 虫眼鏡アイコン */}
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
            🔍
          </span>
        </div>
      </section>
          

      {/* 投稿カードのグリッド */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </section>

      {/* ページネーション */}
      <nav className="flex justify-center mt-8 space-x-2">
        <button className="px-3 py-1 border rounded">← Previous</button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 border rounded ${
              page === 1 ? "bg-black text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-3 py-1 border rounded">Next →</button>
      </nav>
    </main>
  );
}

export default Home;