import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/clients";

import LoginPage from "./form/page";

// ログイン機能実装
// フロントページは、formへ格納

export default async function LoginAuthPage() {
  const supabase = await createClient();

  // セッションの取得
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 認証されている場合は、ホーム画面（articles）に遷移
  if (session) {
    redirect("/articles");
  }

  return <LoginPage />;
}
