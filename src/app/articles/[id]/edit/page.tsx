"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import ArticleEditForm from "@/app/components/article/edit/ArticleEditForm";

import { createClient } from "@/utils/supabase/clients";

export type Post = {
  id: number;
  title?: string;
  content?: string;
  image_path?: string[];
  category_id?: number;
  created_at: string;
  user_id?: string;
};

const EditPage = () => {
  const supabase = createClient();
  const params = useParams();
  const postId = Number(params?.id);

  const [post, setPost] = useState<Post | undefined>(undefined);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select(
          "id, category_id, title, content, image_path, created_at, user_id",
        )
        .eq("id", postId)
        .maybeSingle();

      console.log("ArticleEditFormへ渡すデータ", data);

      if (!error && data) {
        const normalized: Post = {
          id: data.id,
          title: data.title ?? "",
          content: data.content ?? "",
          image_path: (data.image_path as string[] | null) ?? [],
          category_id: data.category_id ?? undefined,
          created_at: new Date(data.created_at).toISOString(),
          user_id: data.user_id ?? undefined,
        };
        setPost(normalized);
      }
    };

    fetchPost();
  }, [postId, supabase]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <ArticleEditForm
        // postId={post.id}
        defaultTitle={post.title}
        defaultContent={post.content}
        defaultCategory={String(post.category_id ?? "")}
        defaultCreated_at={post.created_at}
      />
    </div>
  );
};

export default EditPage;
