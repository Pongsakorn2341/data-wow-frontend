"use client";

import { getBlogs, getOwnBlogs } from "@/action/blog.action";
import { removeUndefinedValues } from "@/lib/helper";
import { IBlog } from "@/lib/types/blog";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce.hook";

type useBlogProps = {
  isOwn: boolean;
};

const useBlog = (props?: useBlogProps) => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleRefetch, setToggle] = useState(false);
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
    const res = props?.isOwn
      ? await getOwnBlogs(`?${query.toString()}`)
      : await getBlogs(`?${query.toString()}`);
    if (Array.isArray(res)) {
      setBlogs(res);
    }
    setIsLoading(false);
  }, [search, props?.isOwn, toggleRefetch]);

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
    refetch: () => setToggle((prev) => !prev),
  };
};

export default useBlog;
