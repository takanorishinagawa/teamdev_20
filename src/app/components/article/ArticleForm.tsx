"use client";

import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import RectButton from "../button/RectButton";

type ArticleFormProps = {
    type: "create" | "edit";
    onSubmit: () => void;
}

const ArticleForm = ({ type, onSubmit }: ArticleFormProps) => {
  return (
    <div>
      <div className="p-15">
        <div className="flex flex-col items-center gap-10">
          {/* タイトル */}
          <input
            type="text"
            className="w-full max-w-[1100px] min-w-[600px] text-5xl font-semibold"
            placeholder="Title"
          />

          {/* 画像アップロード */}
          <div className="w-full max-w-[1200px] min-w-[600px] rounded-lg border-2 border-dashed border-[#7777] p-20">
            <div className="flex flex-col items-center gap-10">
              {/* 矢印アイコン */}
              <Image
                src="/icon/create/arrow.png"
                alt="アイコン"
                width={60}
                height={60}
              />

              {/* アップロードボタン */}
              <Button
                variant="Blue"
                size="lg"
                onClick={() => alert("画像をアップロード！")}
              >
                Upload Image
              </Button>
            </div>
          </div>

          {/* カテゴリー */}
          <div className="flex w-full max-w-[1200px] min-w-[600px] justify-end">
            <div className="flex flex-col gap-3">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                className="w-60 rounded-md border border-[#7777] p-3"
              >
                <option>Value</option>
                <option>Value2</option>
                <option>Value3</option>
              </select>
            </div>
          </div>

          {/* 投稿内容 */}
          <textarea
            className="min-h-[300px] w-full max-w-[1200px] min-w-[600px] rounded-lg border-none bg-[#D9D9D9]/25 p-5 text-lg text-black"
            style={{ boxShadow: "2px 2px 10px 0 rgba(0, 0, 0, 0.25)" }}
          ></textarea>

          {/* 記事作成ボタン */}
          <div className="flex w-full max-w-[1200px] min-w-[600px] justify-end">
            <RectButton onClick={onSubmit}>
              {type === "create" ? "Create" : "Update"}
            </RectButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;