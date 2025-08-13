import { useState } from "react";
import ReactPaginate from "react-paginate";

// 📍ページネーション用
// react-paginate を採用

type PaginatedItemsProps = {
  items: [];
  itemsPerPage: number;
};

function PaginatedItems({ items, itemsPerPage }: PaginatedItemsProps) {
  // 現在のアイテムの開始位置（オフセット）を管理
  const [itemOffset, setItemOffset] = useState(0);

  // 表示するアイテムの終了位置を計算
  const endOffset = itemOffset + itemsPerPage;
  console.log(`表示範囲: ${itemOffset} 〜 ${endOffset}`);

  // 現在のページに表示するアイテムをスライス
  const currentItems = items.slice(itemOffset, endOffset);

  // 総ページ数を計算
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // ===== ページクリック時の処理 =====
  const handlePageClick = (event: { selected: number }) => {
    // 新しい開始位置を計算
    // selectedは0始まりのページ番号
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `選択されたページ番号: ${event.selected}, 新しい開始位置: ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* 投稿の表示部分 */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {currentItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      {/* ページネーションUI */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick} // ページ変更時に呼ばれる関数
        pageRangeDisplayed={5} // 現在ページ周辺に表示するページ数
        pageCount={pageCount} // 総ページ数
        previousLabel="< previous"
        renderOnZeroPageCount={null} // ページが0件のときの表示
      />
    </>
  );
}
