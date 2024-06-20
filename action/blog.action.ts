import { getAccessToken } from "./common.action";

type ICreateBlog = {
  title: string;
  category: string;
  detail: string;
};

export const createBlog = async (payload: ICreateBlog) => {
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
      method: "POST",
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

export const getBlogs = async () => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog`, {
    headers: headers,
  });
  const result = await response.json();
  return result;
};

export const getOwnBlogs = async () => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/own`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
};
