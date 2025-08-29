"use client";

import ArticleCreateForm from "@/app/components/article/create/ArticleCreateForm";

// 記事投稿用画面

const CreatePage = () => {
  return <ArticleCreateForm type="create" onSubmit={() => alert("投稿！")} />;
};

export default CreatePage;
