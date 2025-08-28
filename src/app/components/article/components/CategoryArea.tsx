import Link from "next/link";

import type { CategoryAreaProps } from "./types";

// カテゴリー選択

const CategoryArea = ({
  defaultCategory,
  register,
  errors,
}: CategoryAreaProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <label htmlFor="category">Category</label>
        {errors && (
          <p className="mt-1 px-4 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <select
        id="category"
        defaultValue={defaultCategory}
        className="w-60 rounded-md border border-[#7777] p-3"
        {...register("category_id")}
      >
        <option value="">カテゴリーを選択</option>
        <option value="1">Value</option>
        <option value="2">Value2</option>
        <option value="3">Value3</option>
      </select>

      <Link href="" className="ml-3 text-[#666] underline">
        <p>カテゴリー作成はこちら</p>
      </Link>
    </div>
  );
};

export default CategoryArea;
