// 記事投稿用画面

"use client";

import ArticleForm from "@/app/components/article/ArticleForm";
import React from "react";

const CreatePage = () => {
  return (
    <ArticleForm type="create" onSubmit={() => alert("投稿！")} />
  );
};

export default CreatePage;
