"use client";
import { Separator } from "@/components/ui/separator";

import BlogCard from "@/components/blog/BlogCard";
import { IBlog } from "@/action/blog.action";

type IBlogListProps = {
  blogs: IBlog[];
};

const BlogList = ({ blogs }: IBlogListProps) => {
  return (
    <div className="content p-4">
      {blogs.length == 0 ? (
        <div className="flex justify-center ">
          <p className="w-fit italic p-4 font-semibold ">
            Post what&apos;s on your mind ...
          </p>
        </div>
      ) : null}
      <div className="bg-white rounded-lg w-full">
        {blogs.map((blogData, idx) => {
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
