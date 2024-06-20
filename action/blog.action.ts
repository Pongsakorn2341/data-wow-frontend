import { IBlog, ICreateBlog } from "@/lib/types/blog";
import { getAccessToken } from "./common.action";

export const createBlog = async (payload: ICreateBlog): Promise<IBlog> => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog`, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
};

export const updateBlog = async (blogId: string, payload: ICreateBlog) => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${blogId}`,
    {
      headers: headers,
      method: "PATCH",
      body: JSON.stringify(payload),
    }
  );
  const result = await response.json();
  return result;
};

export const deleteBlog = async (blogId: string) => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${blogId}`,
    {
      headers: headers,
      method: "DELETE",
    }
  );
  const result = await response.json();
  return result;
};

export const getBlogs = async (query = ""): Promise<IBlog[]> => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog${query}`,
    {
      headers: headers,
    }
  );
  const result: IBlog[] = await response.json();
  return result;
};

export const getBlog = async (id: string): Promise<IBlog> => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`,
    {
      headers: headers,
    }
  );
  const result: IBlog = await response.json();
  return result;
};

export const getOwnBlogs = async (query = "") => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/own?${query}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
};
