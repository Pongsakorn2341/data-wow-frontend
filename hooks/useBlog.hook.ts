"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import useDebounce from "./useDebounce.hook";

const useBlog = () => {
  const params = useSearchParams();
  const search = useDebounce(params);

  const fetchBlogs = useCallback(async () => {
    console.log(`[search] FETCH : `, search);
  }, [search]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchBlogs();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return {};
};

export default useBlog;
