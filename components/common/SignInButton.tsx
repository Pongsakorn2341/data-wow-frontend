"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const SignInButton = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <div className="hidden sm:block">
      {session.status == "authenticated" ? (
        <div className="flex items-center justify-start gap-2 text-white">
          <p className="hidden sm:block">{session?.data?.user?.username}</p>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
      ) : (
        <Button variant={"default"} onClick={() => router.push("/auth/login")}>
          Sign in
        </Button>
      )}
    </div>
  );
};

export default SignInButton;
