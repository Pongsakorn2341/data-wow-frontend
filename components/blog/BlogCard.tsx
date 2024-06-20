"use client";

import { Badge } from "@/components/ui/badge";

import { IBlog } from "@/lib/types/blog";
import Link from "next/link";
import { FaRegComment, FaRegTrashCan, FaTrash } from "react-icons/fa6";
import Profile from "../common/Profile";
import { FaRegEdit } from "react-icons/fa";
import { useBlogActionDialog } from "@/store/useBlogActionDialog";
import DeleteBlogDialog from "./[dialog]/DeleteBlogDialog";

type BlogCardProps = {
  blogData: IBlog;
  isOwn?: boolean;
};

const BlogCard = ({ blogData, isOwn = false }: BlogCardProps) => {
  const { onOpen } = useBlogActionDialog();

  return (
    <div
      className={`p-5 gap-2 w-full ${isOwn ? "" : "cursor-pointer"}`}
      key={blogData.title + blogData.created_at}
      onClick={(e) => e.preventDefault()}
    >
      <Link href={isOwn ? "#" : `/blog/${blogData.id}`}>
        <div className="flex justify-between">
          <Profile
            name={blogData?.User?.username}
            profile_image=""
            active_at={blogData.created_at}
          />
          {isOwn ? (
            <div className="flex items-center gap-4">
              <FaRegEdit onClick={() => onOpen(blogData)} />
              <DeleteBlogDialog id={blogData.id} />
            </div>
          ) : null}
        </div>
        <Badge variant={"category"} className="my-2">
          {blogData.category}
        </Badge>
        <p className="text-base font-semibold">{blogData.title}</p>
        <p className="text-sm text-zinc-600 font-normal line-clamp-2">
          {blogData.detail}
        </p>
        <div className="flex items-center gap-2 text-zinc-400">
          <FaRegComment className="my-2" />
          {blogData?._count?.Comment} Comments
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
