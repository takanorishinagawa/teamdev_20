"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import useUserStore from "@/store/useUserStore";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import type { ArticleFormProps } from "@/app/types/types";

import { createClient } from "@/utils/supabase/clients";

import RectButton from "../../button/RectButton";
import AddDateArea from "../components/AddDateArea";
import CategoryArea from "../components/CategoryArea";
import ContentArea from "../components/ContentArea";
import ImageFields from "../components/ImageFields";
import TitleArea from "../components/TitleArea";

// 記事投稿フォーム（追加・編集）

type Schema = z.infer<typeof schema>;

// TODO　画像のファイル容量を加味すること
const schema = z.object({
  title: z
    .string()
    .min(1, { message: "1文字以上で入力してください。" })
    .max(20, { message: "20文字以内で入力してください。" }),
  created_at: z.string().min(1, { message: "日付を選択してください。" }),
  category_id: z
    .string()
    .min(1, { message: "選択してください。" })
    .transform((val) => Number(val)),
  content: z
    .string()
    .min(1, { message: "1文字以上で入力してください。" })
    .max(20, { message: "20文字以内で入力してください。" }),
  image_path: z
    .array(z.instanceof(File), {
      message: "画像ファイルを選択してください！",
    })
    .min(1, { message: "画像は必須です！" }),
});

const ArticleEditForm = ({
  defaultTitle = "",
  defaultContent = "",
  defaultCategory = "",
  defaultCreated_at = "",
}: ArticleFormProps) => {
  const supabase = createClient();
  const router = useRouter();
  const { user } = useUserStore();

  const [message, setMessage] = useState<
    | {
        text: string;
      }
    | undefined
  >(undefined);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: {
      title: defaultTitle,
      content: defaultContent,
      created_at: new Date(defaultCreated_at).toISOString().split("T")[0],
      image_path: [] as File[],
    },
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data: Schema) => {
    console.log("🔽 登録データ確認:", data);

    if (!user) return;

    useEffect(() => {
      reset({
        title: defaultTitle,
        content: defaultContent,
        created_at: new Date()
          .toISOString()
          .slice(0, 16) // "2025-08-19T12:53"
          .replace("T", "_"), // "2025-08-19_12:53"
        image_path: [] as File[],
      });
    }, [
      defaultTitle,
      defaultContent,
      defaultCategory,
      defaultCreated_at,
      reset,
    ]);

    // 記事画像投稿
    const files = data.image_path;
    const uploadedUrls: string[] = [];

    // 画像以外を登録
    const { data: createData, error: createError } = await supabase
      .from("posts")
      .insert({
        user_id: user.id,
        category_id: data.category_id,
        title: data.title,
        content: data.content,
        image_path: "",
        created_at: data.created_at,
      })
      .select("id,created_at")
      .single();

    if (createError || !createData) {
      console.error("Insert error:", createError);
      setMessage({
        text: "記事投稿に失敗しました。再度アップしてください。",
      });
      return;
    }

    const postId = createData.id;
    const createdAt = new Date(createData.created_at)
      .toISOString()
      .slice(0, 16) // "2025-08-19T12:53"
      .replace("T", "_"); // "2025-08-19_12:53"

    // 画像の登録
    for (const file of files) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");

      // TODO createdAtの表記
      const fileName = `articles/${postId}_${createdAt}/${user.id}_${crypto.randomUUID()}_${safeName}`;

      // supabase ストレージのパケットに保存
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("post-images")
        .upload(fileName, file, { upsert: true });

      console.log("upload result:", {
        fileName,
        file,
        uploadData,
        uploadError,
      });

      if (uploadError) {
        setMessage({
          text: "画像アップロードに失敗しました。再度アップしてください。",
        });
        return;
      }

      // それぞれの publicUrl を取得
      const {
        data: { publicUrl },
      } = supabase.storage.from("post-images").getPublicUrl(fileName);

      uploadedUrls.push(publicUrl);
    }

    // 画像を登録
    await supabase
      .from("posts")
      .update({ image_path: uploadedUrls })
      .eq("id", postId);

    if (createError) {
      console.error("Insert error:", createError);
      setMessage({
        text: "投稿に失敗しました。再度投稿してください。",
      });
      return;
    }

    if (!createError) {
      toast.success("投稿しました！");
      router.replace("/articles");
    }
  };

  return (
    <div>
      <div className="p-15">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center gap-7">
            {/* タイトル */}
            <TitleArea register={register} errors={errors.title} />

            {/* 画像アップロード */}
            {/* TODO コンポ化したい */}
            <div className="flex w-full flex-col items-center gap-3">
              <Controller
                name="image_path"
                control={control}
                render={({ field }) => (
                  <ImageFields
                    value={field.value ?? []}
                    onChange={field.onChange}
                  />
                )}
              ></Controller>
              {errors.image_path && isSubmitted && (
                <p className="mt-1 px-4 text-sm text-red-500">
                  {errors.image_path.message}
                </p>
              )}
            </div>

            <div className="flex w-full max-w-[1200px] min-w-[600px] justify-end gap-5">
              {/* 追加日 */}
              <AddDateArea register={register} errors={errors.created_at} />

              {/* カテゴリー */}
              <CategoryArea
                register={register}
                errors={errors.category_id}
                defaultCategory={defaultCategory}
              />
            </div>

            {/* 投稿内容 */}
            <ContentArea register={register} errors={errors.content} />

            {/* 記事作成ボタン */}
            <div className="flex w-full max-w-[1200px] min-w-[600px] items-center justify-end gap-10">
              {message && <div className="text-red-500">{message.text}</div>}

              <RectButton type="submit">Updata</RectButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleEditForm;
