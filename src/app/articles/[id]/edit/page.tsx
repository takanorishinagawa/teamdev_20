// 各記事編集画面用

"use client";

import ArticleForm from "@/app/components/article/ArticleForm";
import React from "react";

const EditArticlePage = () => {
  return (
    <div>
      <h1>Edit Article</h1>
      {/* フォームやデータ取得処理をここに追加 */}
      <ArticleForm/>
    </div>
  );
};

export default EditArticlePage;