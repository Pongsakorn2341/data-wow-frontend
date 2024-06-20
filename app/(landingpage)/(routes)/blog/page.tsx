import { getOwnBlogs } from "@/action/blog.action";
import BlogList from "@/components/blog/BlogList";
import BlogSearch from "@/components/blog/BlogSearch";
import { notFound } from "next/navigation";

const blogDetailPage = async () => {
  const blogs = await getOwnBlogs();
  console.log("🚀 ~ blogDetailPage ~ blogs:", blogs);
  if (!Array.isArray(blogs)) {
    notFound();
  }

  return (
    <section className="relative sm:p-4 block  max-w-[800px] sm:max-w-[1000px]">
      <BlogSearch />
      <BlogList blogs={blogs} />
    </section>
  );
};

export default blogDetailPage;
