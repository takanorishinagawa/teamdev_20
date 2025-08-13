import { useState } from "react";
import ReactPaginate from "react-paginate";

import type { Post } from "@/app/types/types";

import PostCard from "../postCard/PostCard";

// 📍ページネーション用
// react-paginate を採用

type PaginatedItemsProps = {
  items: Post[];
  itemsPerPage: number;
};

export function PaginatedItems({ items, itemsPerPage }: PaginatedItemsProps) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  console.log(`表示範囲: ${itemOffset} 〜 ${endOffset}`);

  const currentItems = items.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `選択されたページ番号: ${event.selected}, 新しい開始位置: ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        {/* 投稿の表示部分 */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {currentItems.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center pt-10">
          {/* ページネーションUI */}
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick} // ページ変更時に呼ばれる関数
            pageRangeDisplayed={5} // 現在ページ周辺に表示するページ数
            pageCount={pageCount} // 総ページ数
            previousLabel="< "
            renderOnZeroPageCount={null} // ページが0件のときの表示
            // ===== css =====
            containerClassName="flex items-center gap-2 justify-center" // 全体を横並び中央
            pageLinkClassName="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-300" // 各ページ番号
            activeLinkClassName="bg-blue-500 text-white" // アクティブページ
            previousLinkClassName="mx-10 px-3 py-1 rounded hover:bg-gray-200 font-semibold" // <ボタン
            nextLinkClassName="mx-10 px-3 py-1 rounded hover:bg-gray-200 font-semibold" // >ボタン
          />
        </div>
      </div>
    </>
  );
}
