import BlogComment from "@/components/blog/BlogComment";
import BlogDetail from "@/components/blog/BlogDetail";

const blogDetailPage = () => {
  return (
    <section className="bg-white min-h-[calc(100dvh-72px)] p-4 block md:top-16">
      <div className="container max-w-[800px] sm:max-w-[1000px]">
        <BlogDetail />
        <BlogComment />
      </div>
    </section>
  );
};

export default blogDetailPage;
