"use server";

import { redirect } from "next/navigation";

type IRegisterAccount = {
  name: string;
  email: string;
  password: string;
};

export type ILoginProps = {
  username: string;
  is_remember_me: boolean;
};
export const signIn = async (payload: ILoginProps) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    {
      headers: headers,
      method: "POST",
      body: JSON.stringify(payload),
    }
  );
  const result = await response.json();
  return result;
};
export const checkAuthorized = (result: any) => {
  if (result?.statusCode == 401) {
    redirect(`/auth/login`);
  }
};
