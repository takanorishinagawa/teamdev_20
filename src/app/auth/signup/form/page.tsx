"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { createClient } from "@/utils/supabase/clients";

import Button from "../../../components/button/Button";
import FormInput from "../../../components/field/FormInput";

// TODO:バリデーション実装
type Schema = z.infer<typeof schema>;

const schema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "メールアドレスの形式ではありません" }),
  name: z
    .string()
    .trim()
    .min(1, { message: "1文字以上入力する必要があります。" }),
  password: z.string().min(6, { message: "6文字以上入力する必要があります" }),
});

export default function SignUpPage() {
  const supabase = createClient();

  const [message, setMessage] = useState<
    | {
        type: "success" | "error";
        text: string;
      }
    | undefined
  >(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", password: "" },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Schema) => {
    try {
      const { name, email, password } = data;

      const { data: signupData, error: signupError } =
        await supabase.auth.signUp({
          email,
          password,
          options: {
            // TODO 新規登録のメール送信時、認証先を指定すること。(vercelデプロイ後のURL)
            emailRedirectTo: "",
          },
        });

      const userId = signupData.user?.id;

      if (signupError) {
        console.error("登録エラー", signupError.message);
        setMessage({
          type: "error",
          text: "登録に失敗しました。もう一度お試しください。",
        });
        return;
      }

      const { error: usersError } = await supabase.from("users").insert({
        id: userId,
        name,
        email,
        created_at: new Date().toISOString(),
      });

      if (usersError) {
        console.error("ユーザー登録エラー", usersError.message);
        setMessage({
          type: "error",
          text: `登録に失敗しました：${usersError.message}`,
        });
        return;
      }

      setMessage({
        type: "success",
        text: "確認メールを送信しました！",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: "予期せぬエラーが発生しました。",
      });
      console.error(error);
    }
  };

  return (
    <>
      <main className="flex justify-center">
        <div className="w-1/3 text-center">
          <h1 className="mt-40 mb-10 text-4xl font-bold">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 mx-16 text-left">
              {/* ユーザー名 */}
              <div className="flex flex-col gap-3">
                <FormInput
                  label="name"
                  placeholder="Enter your name"
                  type="text"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 px-4 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* メールアドレス */}
              <div className="flex flex-col gap-3">
                <FormInput
                  label="email"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 px-4 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* パスワード */}
              <div className="flex flex-col gap-3">
                <FormInput
                  label="password"
                  placeholder="Enter your password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="mt-1 px-4 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-10">
              <Button variant="Blue" size="md" type="submit" className="mb-3">
                Login
              </Button>

              {message && (
                <div
                  className={
                    message.type === "error" ? "text-red-500" : "text-green-600"
                  }
                >
                  {message.text}
                </div>
              )}
            </div>
          </form>

          <div className="mt-4 flex justify-center space-x-3 font-bold">
            <p className="">Already have an account?</p>
            <Link href="/auth/login">
              <p className="text-sky-500 hover:text-sky-300">Login</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
