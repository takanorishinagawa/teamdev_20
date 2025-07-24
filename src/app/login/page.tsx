"use client";

import Link from "next/link";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import FormInput from "../components/field/FormInput";

export default function page() {
    //FormInputの要素
    const inputs = [
    { label: "email", placeholder: "Enter your email" },
    { label: "password", placeholder: "Enter your password" },
  ];
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="w-1/3 text-center">
          <h1 className="mt-40 mb-10 text-4xl font-bold">Sign In</h1>
          <div className="mx-16 text-left">
            {inputs.map(({ label, placeholder }) => (
              <FormInput
                key={label}
                label={label}
                placeholder={placeholder}
              />
            ))}
          </div>

          <div className="mt-10">
            <Button
              variant="Blue"
              size="md"
              onClick={() => alert("ログイン！")}
            >
              Login
            </Button>
          </div>

          <div className="mt-4 flex justify-center space-x-3 font-bold">
            <p className="">Don&apos;t have an account?</p>
            <Link href="/signup">
              <p className="text-sky-500 hover:text-sky-300">Sign Up</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
