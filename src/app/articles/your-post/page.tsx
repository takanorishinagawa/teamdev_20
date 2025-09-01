"use client";

import { PostPaginatedItems } from "@/app/components/pagination/PostPaginatedItems";
import { PostState } from "@/app/types/post";
import { createClient } from "@/utils/supabase/clients";
import { useEffect, useState } from "react";

const YourPost = () => {
  const [posts, setPosts] = useState<PostState[]>([]);

  async function fetchPostsData() {
    const supabase = createClient();
    const { data } = await supabase.from("posts").select(`
      *,
      users (
        *
      ),
      categories (
        *
      )
    `);

    if (data) {
      setPosts(data as PostState[]);
    } else {
      setPosts([]);
    }
  }

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <>
      <main className="p-8">
        <div className="flex flex-col gap-10">
          {/* タイトル */}
          <div className="flex items-center justify-center text-3xl">
            <h2 className="font-semibold">Your Post</h2>
          </div>

          {/* ページネーション */}
          <PostPaginatedItems items={posts} itemsPerPage={9} />
        </div>
      </main>
    </>
  );
};

export default YourPost;
