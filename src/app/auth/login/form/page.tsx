"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { FormInput } from "@/app/components/field/FormInput";

import { createClient } from "@/utils/supabase/clients";

import Button from "../../../components/button/Button";

type Schema = z.infer<typeof schema>;

const schema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "メールアドレスの形式ではありません" }),
  password: z.string().min(6, { message: "6文字以上入力する必要があります" }),
});

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [message, setMessage] = useState<
    | {
        text: string;
      }
    | undefined
  >(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Schema) => {
    try {
      const { email, password } = data;

      const { error: signinError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signinError) {
        console.error("ログインエラー", signinError.message);
        setMessage({
          text: "ログインに失敗しました。もう一度お試しください。",
        });
        return;
      }

      router.replace("/articles");
      toast.success("ログインしました。");
    } catch (error) {
      setMessage({
        text: "予期せぬエラーが発生しました。",
      });
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <main className="flex justify-center">
        <div className="w-1/3 text-center">
          <h1 className="mt-40 mb-10 text-4xl font-bold">Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-16 flex flex-col gap-5 text-left">
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

              {message && <div className="text-red-500">{message.text}</div>}
            </div>
          </form>

          <div className="mt-4 flex justify-center space-x-3 font-bold">
            <p className="">Don&apos;t have an account?</p>
            <Link href="/auth/signup">
              <p className="text-sky-500 hover:text-sky-300">Sign Up</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
