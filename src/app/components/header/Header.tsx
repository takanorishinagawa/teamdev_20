"use client";

import useUserStore from "@/store/useUserStore";

import Button from "../button/Button";

export default function Header() {
  const { user } = useUserStore();

  return (
    <header className="w-full">
      <div className="flex h-16 items-center justify-end gap-6 bg-blue-100 pr-10 font-bold">
        {user.id ? (
          <>
            <Button href="/articles" variant="DarkBlue" size="sm">
              home
            </Button>

            <Button href="/articles/create" variant="white" size="sm">
              Create
            </Button>

            <Button href="/articles/your-post" variant="DarkBlue" size="sm">
              your-post
            </Button>

            <Button href="/auth/signout/form" variant="white" size="sm">
              Log out
            </Button>

            {/* TODO プロフィール画像を配置 */}
          </>
        ) : (
          <>
            <Button href="/auth/login" variant="white" size="sm">
              Login
            </Button>
            <Button href="/auth/signup" variant="DarkBlue" size="sm">
              Sign Up
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
