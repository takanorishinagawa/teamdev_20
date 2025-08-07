// 各記事編集画面用

"use client";

import ArticleForm from "@/app/components/article/ArticleForm";
import React from "react";

const EditArticlePage = () => {
  return (
    <div>
      <ArticleForm
        type="edit"
        onSubmit={() => alert("記事を更新！")}
      />
    </div>
  );
};

export default EditArticlePage;