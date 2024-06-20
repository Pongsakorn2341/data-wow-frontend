"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { FaAngleLeft, FaRegComment } from "react-icons/fa6";

const BlogDetail = () => {
  const router = useRouter();

  return (
    <div>
      <div
        className="flex justify-start bg-green-100 hover:bg-green-300 cursor-pointer w-fit rounded-2xl p-2 my-6"
        onClick={() => router.push(`/`)}
      >
        <FaAngleLeft />
      </div>
      <div className="flex items-center justify-start gap-2 text-white mt-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <p className="text-clr-text text-sm font-bold">NAME</p>
        <p className="text-xs text-clr-gray-300">5 min ago</p>
      </div>
      <Badge variant={"category"} className="my-2">
        History
      </Badge>
      <p className="text-3xl font-semibold my-2">The big short war</p>
      <p className="text-xs">
        Tall, athletic, handsome with cerulean eyes, he was the kind of
        hyper-ambitious kid other kids loved to hate and just the type to make a
        big wager with no margin for error. But on the night before the S.A.T.,
        his father took pity on him and canceled the bet. “I would’ve lost it,”
        Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One
        wrong on the verbal, three wrong on the math,” he muses. “I’m still
        convinced some of the questions were wrong.”
      </p>
      <div className="flex items-center gap-2 text-xs my-4 text-clr-gray-300">
        <FaRegComment />
        32 Comments
      </div>
    </div>
  );
};

export default BlogDetail;
