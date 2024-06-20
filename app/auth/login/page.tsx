"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z
    .string()
    .min(4, { message: `Username required at lest 4 characters` }),
});

type ISchema = z.infer<typeof schema>;

const LoginPage = () => {
  const form = useForm<ISchema>({ resolver: zodResolver(schema) });
  const router = useRouter();
  const { errors } = form.formState;
  const onSubmit = async (data: ISchema) => {
    const res = await signIn("credentials", {
      ...data,
      action: "login",
      redirect: false,
    });
    if (res?.status == 200) {
      router.push(`/`);
    }
  };

  return (
    <section className="bg-clr-green-500 w-full h-[100dvh] flex flex-col-reverse sm:flex-row justify-end">
      <div className="w-full flex items-center justify-center h-full">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="min-w-[400px] flex flex-col gap-2 text-white p-2"
        >
          <p className="text-2xl mb-4">Sign in</p>
          <Input
            placeholder="Username"
            className="text-clr-text"
            {...form.register("username")}
          />
          {errors.username ? (
            <p className="text-xs text-red-500">{errors.username.message}</p>
          ) : null}
          <Button type="submit">Sign In</Button>
        </form>
      </div>
      <div className="min-w-[375px] max-w-[632px] 2xl:min-w-[700px] 3xl:min-w-[800px] bg-clr-green-300 top-0 min-h-[360px] rounded-lg flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/images/board-image.png"}
            width={250}
            height={100}
            alt={"icon-app"}
          />
          <p className="text-white mt-2 font-castoro italic text-2xl">
            a Board
          </p>
        </div>
      </div>
      {/* <div className="right-0 h-[100vh] rounded-xl p-4 absolute min-w-[375px] max-w-[632px] bg-primary  items-center justify-center">
        <div>
          <Image
            src={"/images/board-image.png"}
            width={250}
            height={100}
            alt={"icon-app"}
          />
        </div>
        <div>INPUT</div>
      </div> */}
    </section>
  );
};

export default LoginPage;
