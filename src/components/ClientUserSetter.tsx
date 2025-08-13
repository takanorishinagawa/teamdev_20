"use client";

import { useEffect } from "react";

import useUserStore from "@/store/useUserStore";
import type { Database } from "@/types/database.types";
import type { Session } from "@supabase/supabase-js";

type Users = Database["public"]["Tables"]["users"]["Row"];

export default function ClientUserSetter({
  session,
  users,
}: {
  session: Session | null;
  users: Users | null;
}) {
  const { setUser } = useUserStore();

  useEffect(() => {
    if (!session || !users) return;

    setUser({
      id: session.user.id,
      email: session.user.email ?? "",
      name: users.name,
      image_path: users.image_path,
      created_at: users.created_at,
      updated_at: users.updated_at,
    });
  }, [session, users, setUser]);

  return null;
}
