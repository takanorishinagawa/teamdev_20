// TODO:バリデーション実装

"use client";

import Link from "next/link";
import Button from "../../../components/button/Button";
import FormInput from "../../../components/field/FormInput";

export default function SignUpPage() {
  //FormInputの要素
  const inputs = [
    { label: "username", placeholder: "Enter your name" },
    { label: "email", placeholder: "Enter your email" },
    { label: "password", placeholder: "Enter your password" },
  ];

  return (
    <>
      <main className="flex justify-center">
        <div className="w-1/3 text-center">
          <h1 className="mt-40 mb-10 text-4xl font-bold">Sign Up</h1>
          <div className="mx-16 text-left">
            {inputs.map((input) => (
              <FormInput
                key={input.label}
                label={input.label}
                placeholder={input.placeholder}
              />
            ))}
          </div>

          <div className="mt-10">
            <Button
              variant="Blue"
              size="md"
              onClick={() => alert("サインアップ！")}
            >
              Login
            </Button>
          </div>

          <div className="mt-4 flex justify-center space-x-3 font-bold">
            <p className="">Already have an account?</p>
            <Link href="/login">
              <p className="text-sky-500 hover:text-sky-300">Login</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
