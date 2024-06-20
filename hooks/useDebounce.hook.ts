"use client";

import { useEffect, useState } from "react";

const useDebounce = <T = any>(input: T, delay = 500) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(input);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay, input]);

  return data;
};

export default useDebounce;
