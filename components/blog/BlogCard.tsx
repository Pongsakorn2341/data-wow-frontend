"use client";

import { Badge } from "@/components/ui/badge";

import { IBlog } from "@/lib/types/blog";
import Link from "next/link";
import { FaRegComment } from "react-icons/fa6";
import Profile from "../common/Profile";

type BlogCardProps = {
  blogData: IBlog;
};

const BlogCard = ({ blogData }: BlogCardProps) => {
  return (
    <div
      className="p-5 gap-2 cursor-pointer w-full"
      key={blogData.title + blogData.created_at}
      onClick={(e) => e.preventDefault()}
    >
      <Link href={`/blog/${blogData.id}`}>
        <Profile name={"test"} profile_image="" />
        <Badge variant={"category"} className="my-2">
          {blogData.category}
        </Badge>
        <p className="text-base font-semibold">{blogData.title}</p>
        <p className="text-sm text-zinc-600 font-normal line-clamp-2">
          {blogData.detail}
        </p>
        <div className="flex items-center gap-2 text-zinc-400">
          <FaRegComment className="my-2" />
          {blogData?._count.Comment} Comments
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
