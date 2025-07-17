// 記事投稿用画面

"use client";

import Button from "@/app/components/button/Button";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="pt-20">
        <div className="flex flex-col items-center gap-5">
          {/* タイトル */}
          <input
            type="text"
            className="text-5xl font-semibold"
            placeholder="Title"
          />

          {/* 画像アップロード */}
          <div>
            {/* 矢印アイコン */}
            <Button
              variant="Blue"
              size="lg"
              onClick={() => alert("画像をアップロード！")}
            >
              Upload Image
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
