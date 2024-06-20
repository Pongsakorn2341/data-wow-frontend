import { getBlog } from "@/action/blog.action";
import BlogComment from "@/components/blog/BlogComment";
import BlogDetail from "@/components/blog/BlogDetail";
import { notFound } from "next/navigation";

const blogDetailPage = async (req: { params: { blogId: string } }) => {
  const blogData = await getBlog(req.params.blogId);
  if (!blogData) {
    notFound();
  }

  return (
    <section className="bg-white min-h-[calc(100dvh-72px)] p-4 block md:top-16">
      <div className="container max-w-[800px] sm:max-w-[1000px]">
        <BlogDetail blogData={blogData} />
        <BlogComment />
      </div>
    </section>
  );
};

export default blogDetailPage;
