"use client";


import ArticleForm from "@/app/components/article/ArticleForm";

// 各記事編集画面用

const EditArticlePage = () => {
  const dummyArticle = {
    title: "既存記事タイトル",
    content: "ここに既存の本文が入ります",
    category: "Value2",
  };
  return (
    <div>
      <ArticleForm
        type="edit"
        onSubmit={() => alert("記事を更新！")}
        defaultTitle={dummyArticle.title}
        defaultContent={dummyArticle.content}
        defaultCategory={dummyArticle.category}
      />
    </div>
  );
};

export default EditArticlePage;
