"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce.hook";
import { IBlog } from "@/lib/types/blog";
import { getBlog, getBlogs } from "@/action/blog.action";
import { removeUndefinedValues } from "@/lib/helper";

const useBlog = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useSearchParams();
  const search = useDebounce(params);

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    const query = new URLSearchParams(
      removeUndefinedValues({
        category: search?.get("category"),
        title: search?.get("title"),
      })
    );
    const res = await getBlogs(`?${query.toString()}`);
    if (Array.isArray(res)) {
      setBlogs(res);
    }
    setIsLoading(false);
  }, [search]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchBlogs();
    }
    return () => {
      isMounted = false;
    };
  }, [fetchBlogs]);

  return {
    data: blogs,
    isLoading,
  };
};

export default useBlog;
