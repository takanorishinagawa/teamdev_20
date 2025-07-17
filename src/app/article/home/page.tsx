"use client";

import Button from "@/app/components/button/Button";
import { useRouter } from "next/navigation";
import React from "react";

const ArticleHomePage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2>記事投稿ホーム画面</h2>

        {/* （仮）記事投稿画面へ遷移！ */}
        <Button
          variant="Blue"
          size="md"
          onClick={() => {
            router.push("/article/create");
          }}
        >
          記事投稿
        </Button>
      </div>
    </div>
  );
};

export default ArticleHomePage;
