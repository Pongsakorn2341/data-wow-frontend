"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IBlog } from "@/lib/types/blog";
import { useRouter } from "next/navigation";
import { FaAngleLeft, FaRegComment } from "react-icons/fa6";

type BlogDetailProps = {
  blogData: IBlog;
};

const BlogDetail = ({ blogData }: BlogDetailProps) => {
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
        <p className="text-clr-text text-sm font-bold">
          {blogData?.User?.username}
        </p>
        <p className="text-xs text-clr-gray-300">5 min ago</p>
      </div>
      <Badge variant={"category"} className="my-2">
        {blogData.category}
      </Badge>
      <p className="text-3xl font-semibold my-2">{blogData.title}</p>
      <p className="text-xs">{blogData.detail}</p>
      <div className="flex items-center gap-2 text-xs my-4 text-clr-gray-300">
        <FaRegComment />
        {blogData._count.Comment} Comments
      </div>
    </div>
  );
};

export default BlogDetail;
