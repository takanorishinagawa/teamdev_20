"use server";

import { createClient } from "./server";

export const getCurrentUser = async () => {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  let users = null;

  if (session) {
    const { data: currentProfile } = await supabase
      .from("users")
      .select("*")
      .eq("id", session.user.id)
      .single();

    users = currentProfile;

    // メールアドレス変更時に同期
    if (currentProfile && currentProfile.email !== session.user.email) {
      const { data: updatedProfile } = await supabase
        .from("users")
        .update({ email: session.user.email })
        .match({ id: session.user.id })
        .select("*")
        .single();

      users = updatedProfile;
    }
  }

  return { session, users };
};
