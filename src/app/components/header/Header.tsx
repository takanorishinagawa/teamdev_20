"use client";

import { useState } from "react";

import useUserStore from "@/store/useUserStore";
import type { Session } from "@supabase/supabase-js";

import { createClient } from "@/utils/supabase/clients";

import Button from "../button/Button";

export default function Header() {
  const supabase = createClient();

  const [session, setSession] = useState<Session | null>(null);

  const { user } = useUserStore();

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data }) => setSession(data.session));

  //   // const { data: loginData } = supabase.auth.onAuthStateChange(
  //   //   (_event, newSession) => {
  //   //     setSession(newSession);
  //   //   },
  //   // );

  //   // // クリーンアップ
  //   // return () => {
  //   //   loginData.subscription.unsubscribe();
  //   // };
  // }, [supabase]);

  return (
    <header className="w-full">
      <div className="flex h-16 items-center justify-end gap-6 bg-blue-100 pr-10 font-bold">
        {/* {session ? (
          <Button
            // TODO 記事作成ページへ遷移
            href=""
            variant="DarkBlue"
            size="sm"
          >
            Create
          </Button>
        ) : (
          <>
            <Button href="/auth/login" variant="white" size="sm">
              Login
            </Button>
            <Button href="/auth/signup" variant="DarkBlue" size="sm">
              Sign Up
            </Button>
          </>
          
        )} */}

        {user ? (
          <Button
            // TODO 記事作成ページへ遷移
            href=""
            variant="DarkBlue"
            size="sm"
          >
            Create
          </Button>
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
