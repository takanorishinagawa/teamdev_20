import { Database } from "@/types/database.types";

import { Category } from "./category";
import { User } from "./user";

export type Post = Database["public"]["Tables"]["posts"]["Row"];

export type PostState = {
  users: User;
  categories: Category;
} & Post;
