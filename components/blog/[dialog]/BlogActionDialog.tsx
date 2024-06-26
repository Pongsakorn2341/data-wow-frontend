"use client";

import { createBlog, updateBlog } from "@/action/blog.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CategoryList } from "@/lib/data/category.data";
import { IBlog } from "@/lib/types/blog";
import { useBlogActionDialog } from "@/store/useBlogActionDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: `Title is required` }),
  detail: z.string().min(1, { message: `Detail is required` }),
  category: z
    .string()
    .min(1, { message: `Category is required` })
    .default("history"),
});
type ISchema = z.infer<typeof schema>;

type BlogActionDialogProps = {
  refetch: () => void;
};

const BlogActionDialog = ({ refetch }: BlogActionDialogProps) => {
  const { isOpen, onClose, blogData: actionBlogData } = useBlogActionDialog();
  const router = useRouter();
  const form = useForm<ISchema>({
    resolver: zodResolver(schema),
  });

  const onCloseModal = () => {
    form.reset();
    form.clearErrors();
    onClose();
  };

  const { errors } = form.formState;

  const onSubmit = async (data: ISchema) => {
    const isUpdate = actionBlogData ? true : false;
    if (isUpdate && !actionBlogData?.id) {
      toast.error(`Blog Id is required`);
      return;
    }
    const response = isUpdate
      ? await updateBlog(actionBlogData?.id as string, data as IBlog)
      : await createBlog(data as IBlog);
    if (response?.id) {
      toast.success(
        `Blog ${data.title} is ${isUpdate ? "updated" : "created"}.`
      );
      router.refresh();
      refetch();
      onCloseModal();
    } else {
      toast.error(`${(response as any).message}`);
    }
  };

  useEffect(() => {
    form.reset({
      category: actionBlogData?.category,
      title: actionBlogData?.title,
      detail: actionBlogData?.detail,
    });
  }, [actionBlogData]);

  return (
    <Dialog open={isOpen} onOpenChange={onCloseModal}>
      <DialogContent className="bg-white text-clr-text rounded-lg lg:max-w-[800px]">
        <DialogHeader className="my-2">
          <DialogTitle className="text-xl">
            {actionBlogData ? "Update" : "Create"} Post
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center w-full sm:w-fit">
              <Select
                {...form.register("category")}
                onValueChange={(e) => {
                  form.setValue("category", e);
                }}
                defaultValue={actionBlogData?.category}
              >
                <SelectTrigger className="flex items-center justify-center gap-2 bg-transparent border border-primary text-primary">
                  <SelectValue placeholder="Choose a community" />
                </SelectTrigger>
                <SelectContent>
                  {CategoryList.map((cateData) => (
                    <SelectItem
                      value={cateData.value}
                      key={cateData.value}
                      onClick={() => form.setValue("category", cateData.value)}
                    >
                      {cateData.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Input {...form.register("title")} placeholder="Title" />
              {errors.title ? (
                <span className="text-red-500 text-xs">
                  {errors.title.message}
                </span>
              ) : null}
            </div>
            <div className="w-full">
              <Textarea
                placeholder="What's on your mind ..."
                rows={10}
                {...form.register("detail")}
              />
              {errors.detail ? (
                <span className="text-red-500 text-xs">
                  {errors.detail.message}
                </span>
              ) : null}
            </div>
          </div>
          {/* <DialogFooter className="gap-2"> */}
          <div className="flex flex-col sm:flex-row items-center justify-end w-full my-2 gap-2">
            <Button
              type="button"
              variant={"outline"}
              className="border-primary text-primary min-w-[105px] w-full sm:w-fit"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit" className="min-w-[105px] w-full sm:w-fit">
              Post
            </Button>
          </div>
        </form>
        {/* </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default BlogActionDialog;
