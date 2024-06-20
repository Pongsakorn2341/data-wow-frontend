"use client";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FaPlus } from "react-icons/fa6";
import BlogActionDialog from "./[dialog]/BlogActionDialog";
import { useBlogActionDialog } from "@/store/useBlogActionDialog";
import { CategoryList } from "@/lib/data/category.data";

const BlogSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { onOpen } = useBlogActionDialog();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value || value == "-") {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div
      className={`flex my-4 p-4 sticky overflow:bg-white top-[72px] z-30 backdrop-blur`}
    >
      <Input
        className="bg-transparent  sm:border border-gray-300 mx-2 focus:border focus:border-gray-300 focus:border-primary"
        placeholder="Search ..."
        type="search"
        onChange={(e) => {
          router.push(
            pathname + "?" + createQueryString("title", e.target.value)
          );
        }}
      />
      <Select
        onValueChange={(e) => {
          router.push(pathname + "?" + createQueryString("category", e));
        }}
      >
        <SelectTrigger className="w-[180px] border-none flex items-center justify-center gap-2">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="min-w-[200px] _sm:w-fit relative z-50">
          <SelectItem value={"-"}>All</SelectItem>
          {CategoryList.map((cateData) => (
            <SelectItem
              value={cateData.value}
              key={cateData.value}
              className="my-2 hover:bg-clr-green-300"
            >
              {cateData.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant={"default"} className="flex gap-2 mx-2" onClick={onOpen}>
        Create <FaPlus />
      </Button>
      <BlogActionDialog />
    </div>
  );
};

export default BlogSearch;
