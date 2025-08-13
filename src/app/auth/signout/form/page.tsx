"use client";

import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import useUserStore from "@/store/useUserStore";

import Button from "@/app/components/button/Button";

import { createClient } from "@/utils/supabase/clients";

type Schema = { email: string };

const SignOutPage = () => {
  const router = useRouter();
  const supabase = createClient();
  const { resetUser } = useUserStore();

  const { handleSubmit } = useForm({
    defaultValues: { email: "" },
  });

  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit: SubmitHandler<Schema> = async () => {
    setMessage(null);

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        setMessage({
          type: "error",
          text: "エラーが発生しました。\n" + error.message,
        });
        return;
      }

      resetUser();
      router.push("/auth/login");
      toast.success("ログアウトしました。");
    } catch (error) {
      console.error("予期せぬエラー", error);
      setMessage({
        type: "error",
        text: "予期せぬエラーが発生しました。",
      });
      return;
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[480px] min-w-[320px] flex-col gap-5 bg-[#F3F0EB]">
      <form
        className="flex w-full flex-col items-center gap-5 p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="py-3 leading-relaxed font-semibold text-[#777777]">
            <p>本当にログアウトしますか？</p>
          </div>

          {/* ボタン */}
          <Button type="submit">ログアウト</Button>

          {/* メッセージ表示 */}
          {message && (
            <p className="mt-1 px-4 text-sm text-red-500">{message.text}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignOutPage;
