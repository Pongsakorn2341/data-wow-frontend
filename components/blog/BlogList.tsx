"use client";
import { Separator } from "@/components/ui/separator";

import BlogCard from "@/components/blog/BlogCard";
import useBlog from "@/hooks/useBlog.hook";
import { cn } from "@/lib/utils";
import { ImSpinner } from "react-icons/im";
import { IBlog } from "@/lib/types/blog";
import { useMemo } from "react";

type BlogListProps = {
  isOwn: boolean;
};

const BlogList = (props?: BlogListProps) => {
  const { data: blogs, isLoading = false } = useBlog({
    isOwn: Boolean(props?.isOwn),
  });

  return (
    <div className="content p-4">
      {blogs.length == 0 && !isLoading ? (
        <div className="flex justify-center ">
          <p className="w-fit italic p-4 font-semibold ">
            Post what&apos;s on your mind ...
          </p>
        </div>
      ) : null}
      {isLoading ? (
        <div
          className={cn(
            "flex min-h-screen flex-col items-center justify-center",
            "text-white"
          )}
        >
          <ImSpinner className="mr-2 h-10 w-10 animate-spin fill-white" />
          <span className="font-semibold">Loading...</span>
        </div>
      ) : null}
      <div className="bg-white rounded-lg w-full">
        {!isLoading &&
          blogs.map((blogData, idx) => {
            return (
              <div key={idx + blogData.title}>
                <BlogCard blogData={blogData} />
                {idx < blogs.length - 1 ? <Separator /> : null}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
