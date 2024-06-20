"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useAddCommentDialog } from "@/store/useAddCommentDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  comment: z.string().min(1, { message: `Please enter a comment` }),
});
type ISchema = z.infer<typeof schema>;

type AddCommentDialogProps = {};

const AddCommentDialog = ({}: AddCommentDialogProps) => {
  const { isOpen, onClose } = useAddCommentDialog();
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
      <DialogContent className="max-w-[360px] bg-white text-clr-text rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-normal text-start">
            Add Comments
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center w-full">
            <div className="w-full">
              <Textarea
                placeholder="What's on your mind ..."
                {...form.register("comment")}
                className="focus:border focus:border-primary"
                rows={6}
              />
              {errors.comment ? (
                <span className="text-xs text-red-500">
                  {errors.comment.message}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-end w-full my-2 gap-2">
            <Button
              type="button"
              variant={"outline"}
              className="border-primary text-primary w-full sm:w-fit"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-fit">
              Post
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCommentDialog;
