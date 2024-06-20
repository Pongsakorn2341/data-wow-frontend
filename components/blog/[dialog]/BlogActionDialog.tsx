"use client";

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
import { useBlogActionDialog } from "@/store/useBlogActionDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: `Title is required` }),
  detail: z.string().min(1, { message: `Detail is required` }),
});
type ISchema = z.infer<typeof schema>;

type BlogActionDialogProps = {};

const BlogActionDialog = ({}: BlogActionDialogProps) => {
  const { isOpen, onClose } = useBlogActionDialog();
  const form = useForm<ISchema>({
    resolver: zodResolver(schema),
  });

  const onCloseModal = () => {
    form.reset();
    form.clearErrors();
    onClose();
  };

  const { errors } = form.formState;
  console.log("🚀 ~ BlogActionDialog ~ errors:", errors);

  const onSubmit = async (data: ISchema) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    // try {
    //   if (!data.name) {
    //     toast.error(`Portfolio name is not provided`);
    //     return;
    //   }
    //   const response = await addBlog(data.name);
    //   if (response) {
    //     toast.success(`Portfolio ${data.name} is added.`);
    //     router.refresh();
    //     onCloseModal();
    //   }
    // } catch (e) {
    //   handleError(e, true);
    // }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onCloseModal}>
      <DialogContent className="bg-white text-clr-text rounded-lg lg:max-w-[800px]">
        <DialogHeader className="my-2">
          <DialogTitle className="text-xl">Create Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center w-full sm:w-fit">
              <Select
                onValueChange={(e) => {
                  e;
                }}
              >
                <SelectTrigger className="flex items-center justify-center gap-2 bg-transparent border border-primary text-primary">
                  <SelectValue placeholder="Choose a community" />
                </SelectTrigger>
                <SelectContent>
                  {CategoryList.map((cateData) => (
                    <SelectItem value={cateData.value} key={cateData.value}>
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
