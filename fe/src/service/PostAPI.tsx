import { Post } from "../utiliy/request";

export const getPostList = () => {
  return Post("/post/list");
}