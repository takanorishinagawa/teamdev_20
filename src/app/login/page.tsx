"use client";

import Link from "next/link";
import Header from "../components/header/Header";
import Button from "../components/button/Button";

export default function page() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="w-1/3 text-center">
          <h1 className="mt-40 mb-10 text-4xl font-bold">Sign In</h1>
          <div className="mx-16 text-left">
            <label htmlFor="email" className="pl-3 text-xl font-bold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-3 mb-5 w-full rounded-xl bg-gray-100 py-3 pl-3 text-xl shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
            />
            <label htmlFor="password" className="pl-3 text-xl font-bold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="mt-3 w-full rounded-xl bg-gray-100 py-3 pl-3 text-xl shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* 参考（Naoya） */}
          <div className="mt-10">
            <Button
              variant="Blue"
              size="md"
              onClick={() => alert("ログイン！")}
            >
              Login
            </Button>

            {/* <button
              type="submit"
              className="transform rounded-full bg-sky-500 px-10 py-3 text-xl font-bold text-white shadow-md duration-300 hover:-translate-y-1 hover:bg-sky-300"
            >
              Login
            </button> */}
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
