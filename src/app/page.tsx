// ログインのセッション確認後に遷移

import { redirect } from "next/navigation";

export default function PageTop() {
  redirect("/article/home");
  return;
}
