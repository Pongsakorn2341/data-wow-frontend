import BlogList from "@/components/blog/BlogList";
import BlogSearch from "@/components/blog/BlogSearch";

const HomePage = () => {
  return (
    <section className="relative sm:p-4 block  max-w-[800px] sm:max-w-[1000px]">
      <BlogSearch />
      <BlogList />
    </section>
  );
};

export default HomePage;
