"use client";

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
  password: z.string().min(6, { message: "6文字以上入力する必要があります" }),
});

const onSubmit = async (data: Schema) => {
  // try {
  // } catch {}
  console.log("OK:", data);
};

export default function LoginPage() {
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(schema),
  });

  return (
    <>
      <main className="flex justify-center">
        <div className="w-1/3 text-center">
          <h1 className="mt-40 mb-10 text-4xl font-bold">Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 mx-16 text-left">
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
              <Button variant="Blue" size="md" type="submit">
                Login
              </Button>
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
