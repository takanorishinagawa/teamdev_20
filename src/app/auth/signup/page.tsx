// サインアップ機能実装
// フロントページは、formへ格納

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import SignUpPage from "./form/page";

export default async function SignUpAuthPage() {
  const supabase = await createClient();

  // セッションの取得
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 認証されている場合は、ホーム画面（articles）に遷移
  if (session) {
    redirect("/articles");
  }

  return <SignUpPage />;
}
