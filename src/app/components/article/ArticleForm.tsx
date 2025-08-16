"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import useUserStore from "@/store/useUserStore";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import type { ArticleFormProps } from "@/app/types/types";

import { createClient } from "@/utils/supabase/clients";

import RectButton from "../button/RectButton";

// 記事投稿フォーム（追加・編集）

type Schema = z.infer<typeof schema>;

const schema = z.object({
  category_id: z
    .string()
    .min(1, { message: "カテゴリーを選択してください。" })
    .transform((val) => Number(val)),
  title: z
    .string()
    .min(1, { message: "1文字以上で入力してください。" })
    .max(20, { message: "20文字以内で入力してください。" }),
  saved_date: z.string().min(1, { message: "日付を選択してください。" }),
  content: z
    .string()
    .min(1, { message: "1文字以上で入力してください。" })
    .max(20, { message: "20文字以内で入力してください。" }),
  image_path: z.string().min(1, { message: "画像は必須です！" }),
});

const ArticleForm = ({
  type,
  defaultTitle = "",
  defaultContent = "",
  defaultCategory = "",
}: ArticleFormProps) => {
  const supabase = createClient();
  const router = useRouter();
  const { user } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      saved_date: new Date().toISOString().split("T")[0],
    },
    resolver: zodResolver(schema),
  });

  console.log("バリデーションエラー:", errors);

  const onSubmit = async (data: Schema) => {
    console.log("🔽 登録データ確認:", data);
    console.log("クリックされました");

    if (!user) return;

    if (type === "create") {
      const { error } = await supabase.from("posts").insert({
        user_id: user.id,
        category_id: data.category_id,
        title: data.title,
        content: data.content,
        image_path: data.image_path,
        created_at: data.saved_date,
      });

      if (error) {
        console.error("Insert error:", error);
        toast.error("保存に失敗しました");
        return;
      }

      if (!error) {
        toast.success("投稿しました！");
        router.replace("/articles");
      }
    }

    // if (type === "create") {
    // }
  };

  return (
    <div>
      <div className="p-15">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center gap-10">
            <div className="flex w-full flex-col items-center gap-3">
              {/* タイトル */}
              <input
                type="text"
                defaultValue={defaultTitle}
                className="w-full max-w-[1100px] min-w-[600px] text-5xl font-semibold"
                placeholder="Title"
                {...register("title")}
              />
              <div className="flex w-full items-start">
                {errors.title && (
                  <p className="mt-1 px-4 text-sm text-red-500">
                    {errors.title.message}
                  </p>
                )}
              </div>
            </div>

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

                <div className="flex flex-col gap-3">
                  {/* 画像選択 */}
                  <label className="transform cursor-pointer rounded-full bg-sky-500 px-14 py-5 text-xl font-bold text-white shadow-md duration-300 hover:-translate-y-1 hover:bg-sky-300">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      {...register("image_path")}
                    />
                    <span>Upload Image</span>
                  </label>

                  {errors.image_path && (
                    <p className="mt-1 px-4 text-sm text-red-500">
                      {errors.image_path.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex w-full max-w-[1200px] min-w-[600px] justify-end gap-5">
              {/* 追加日 */}
              <div className="flex flex-col gap-3">
                <label htmlFor="add-date">Date Added</label>
                <input
                  type="date"
                  className="w-60 rounded-md border border-[#7777] p-3"
                  {...register("saved_date")}
                ></input>
                {errors.saved_date && (
                  <p className="mt-1 px-4 text-sm text-red-500">
                    {errors.saved_date.message}
                  </p>
                )}
              </div>

              {/* カテゴリー */}
              <div className="flex flex-col gap-3">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  defaultValue={defaultCategory}
                  className="w-60 rounded-md border border-[#7777] p-3"
                  {...register("category_id")}
                >
                  <option value="1">Value</option>
                  <option value="2">Value2</option>
                  <option value="3">Value3</option>
                </select>

                <Link href="" className="ml-3 text-[#666] underline">
                  <p>カテゴリー作成はこちら</p>
                </Link>
              </div>
            </div>

            {/* 投稿内容 */}
            <div className="flex w-full flex-col items-center gap-3">
              <textarea
                defaultValue={defaultContent}
                className="min-h-[300px] w-full max-w-[1200px] min-w-[600px] rounded-lg border-none bg-[#D9D9D9]/25 p-5 text-lg text-black"
                style={{ boxShadow: "2px 2px 10px 0 rgba(0, 0, 0, 0.25)" }}
                placeholder="投稿内容を入力してください。"
                {...register("content")}
              ></textarea>

              <div className="flex w-full items-start">
                {errors.content && (
                  <p className="mt-1 px-4 text-sm text-red-500">
                    {errors.content.message}
                  </p>
                )}
              </div>
            </div>

            {/* 記事作成ボタン */}
            <div className="flex w-full max-w-[1200px] min-w-[600px] justify-end">
              <RectButton type="submit">
                {type === "create" ? "Create" : "Update"}
              </RectButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleForm;
