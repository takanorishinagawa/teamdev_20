import Header from "@/app/components/header/Header";
import Button from "@/app/components/button/Button";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header />
      {/* 記事エリア */}
      <div className="mx-auto my-8 w-2/3 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-md">
        {/* タイトルとユーザーアイコン */}
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Blog Title</h1>
          <div>
            <Image
              src="/icon/articleDetail/user-image.png"
              alt="ユーザーアイコン"
              width={40}
              height={40}
            />
          </div>
        </div>
        {/* 記事画像 */}
        <div>
          <Image
            src="/icon/articleDetail/user-image.png"
            alt="投稿画像"
            width={40}
            height={40}
          />
        </div>
        {/* 本文 */}
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          temporibus debitis necessitatibus perferendis ea, eligendi iusto
          doloribus quo reprehenderit explicabo, voluptatem incidunt repellat,
          facilis quaerat! Eveniet maxime, dolorum laboriosam harum earum unde
          laborum? Consequatur nihil mollitia magnam cupiditate, iste fuga
          excepturi rem officiis minus beatae! Nulla adipisci numquam commodi
          minima.
        </p>
      </div>
      {/* 記事エリア end */}

      {/* コメントエリア */}
      <div className="mx-auto my-8 w-1/2 space-y-4">
        <h2 className="text-xl">Comments</h2>
        {/* 入力欄 */}
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Your Comment..."
            className="mr-5 w-full rounded-md border border-gray-300 px-3 text-gray-700 focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />
          <Button size="sm">Comment</Button>
        </div>
        {/* コメント一覧 */}
        <div className="flex items-center justify-between space-x-6 bg-amber-100 p-4">
          <div>
            <Image
              src="/icon/articleDetail/user-image.png"
              alt="ユーザーアイコン"
              width={60}
              height={60}
            />
            <p>user</p>
          </div>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quae quia reiciendis fugit facere veritatis quisquam porro iusto
              odit consequuntur pariatur, molestias, cum blanditiis possimus
              repellendus enim, natus laborum perspiciatis.
            </p>
            <p className="text-sky-600">a min ago</p>
          </div>
        </div>
      </div>
    </>
  );
}
