import BlogList from "@/components/blog/BlogList";
import BlogSearch from "@/components/blog/BlogSearch";

const HomePage = async () => {
  return (
    <section className="relative sm:p-4 block  max-w-[800px] sm:max-w-[1000px]">
      <BlogSearch />
      <BlogList isOwn={false} />
    </section>
  );
};

export default HomePage;
