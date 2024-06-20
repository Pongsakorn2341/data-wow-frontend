import { getAccessToken } from "./common.action";

type ICreateBlog = {
  title: string;
  category: string;
  detail: string;
};

type ICreator = {
  id: string;
  username: string;
  profile_image: string | null;
  role: "USER" | "ADMIN" | "SUPERADMIN";
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type IBlog = {
  id: string;
  title: string;
  detail: string;
  category: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  User: ICreator;
  _count: {
    Comment: number;
  };
};

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

export const getBlogs = async (): Promise<IBlog[]> => {
  const accessToken = await getAccessToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog`, {
    headers: headers,
  });
  const result: IBlog[] = await response.json();
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
