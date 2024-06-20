"use client";

import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import { FaRegComment } from "react-icons/fa6";
import Profile from "../common/Profile";

type BlogCardProps = {
  mockData: any;
};

const BlogCard = ({ mockData }: BlogCardProps) => {
  return (
    <div
      className="p-5 gap-2 cursor-pointer"
      key={mockData.title}
      onClick={(e) => e.preventDefault()}
    >
      <Link href={`/blog/1`}>
        <Profile name={"test"} profile_image="" />
        <Badge variant={"category"} className="my-2">
          {mockData.category}
        </Badge>
        <p className="text-base font-semibold">{mockData.title}</p>
        <p className="text-sm text-zinc-600 font-normal line-clamp-2">
          {mockData.description}
        </p>
        <div className="flex items-center gap-2 text-zinc-400">
          <FaRegComment className="my-2" />
          {mockData?.comment?._count} Comments
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
