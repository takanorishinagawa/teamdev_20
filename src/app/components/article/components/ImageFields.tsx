"use client";

import { useEffect, useMemo, useRef } from "react";

import Image from "next/image";

import type { ImageFieldProps } from "@/app/types/types";

import Button from "../../button/Button";
import { PreviewPaginatedItems } from "../../pagination/PreviewPaginatedItems";

// ArticleFormの画像登録処理
function ImageFields({ value, onChange }: ImageFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // File[](RHF) → objectURL[]（ローカルで管理するURL)
  const previews = useMemo(
    () => value.map((file) => URL.createObjectURL(file)),
    [value],
  );

  // 画像更新した場合、objectURL[]をリセット
  useEffect(() => {
    return () => previews.forEach((url) => URL.revokeObjectURL(url));
  }, [previews]);

  return (
    <div className="w-full max-w-[1200px] min-w-[600px] rounded-lg border-2 border-dashed border-[#7777] p-10">
      <div className="flex flex-col items-center gap-10">
        {/* 登録前画像ページネーション */}
        <PreviewPaginatedItems items={previews} itemsPerPage={1} />

        {/* 矢印アイコン */}
        <Image
          src="/icon/create/arrow.png"
          alt="アイコン"
          width={60}
          height={60}
        />

        <Button
          type="button"
          size="lg"
          className="rounded-full bg-sky-500 px-14 py-5 text-xl font-bold text-white shadow-md duration-300 hover:-translate-y-1 hover:bg-sky-300"
          onClick={() => inputRef.current?.click()}
        >
          Upload Image
        </Button>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple
          onChange={(e) => {
            const files = Array.from(e.target.files ?? []);
            onChange?.(files);
          }}
        />
      </div>
    </div>
  );
}

export default ImageFields;
