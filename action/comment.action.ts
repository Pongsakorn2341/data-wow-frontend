import { IComment } from "@/lib/types/blog";
import { getAccessToken } from "./common.action";

type IAddComment = {
  blog_id: string;
  detail: string;
};

export const createComment = async (payload: IAddComment) => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/comment`,
    {
      headers: headers,
      method: "POST",
      body: JSON.stringify(payload),
    }
  );
  const result = await response.json();
  return result;
};

type IUpdateComment = {
  detail: string;
};

// export const updateComment = async (
//   commentId: string,
//   payload: IUpdateComment
// ) => {
//   const accessToken = await getAccessToken();
//   const headers = new Headers();
//   headers.append("Content-Type", "application/json");
//   headers.append("Authorization", `Bearer ${accessToken}`);
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${commentId}`,
//     {
//       headers: headers,
//       method: "PATCH",
//       body: JSON.stringify(payload),
//     }
//   );
//   const result = await response.json();
//   return result;
// };

// export const deleteComment = async (blogId: string) => {
//   const accessToken = await getAccessToken();
//   const headers = new Headers();
//   headers.append("Content-Type", "application/json");
//   headers.append("Authorization", `Bearer ${accessToken}`);
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${blogId}`,
//     {
//       headers: headers,
//       method: "DELETE",
//     }
//   );
//   const result = await response.json();
//   return result;
// };

export const getComments = async (blogId: string): Promise<IComment[]> => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/comment?blog_id=${blogId}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
};
