"use server";

import BlogList from "@/components/blog/BlogList";
import BlogSearch from "@/components/blog/BlogSearch";
import LoadingComponent from "@/components/common/LoadingComponent";
import { Suspense } from "react";

const blogDetailPage = async () => {
  return (
    <section className="relative sm:p-4 block  max-w-[800px] sm:max-w-[1000px]">
      <Suspense fallback={<LoadingComponent />}>
        <BlogSearch />
        <BlogList isOwn={true} />
      </Suspense>
    </section>
  );
};

export default blogDetailPage;
