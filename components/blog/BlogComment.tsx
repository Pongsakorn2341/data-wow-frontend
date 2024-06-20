"use client";
import { createComment } from "@/action/comment.action";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IComment } from "@/lib/types/blog";
import { useAddCommentDialog } from "@/store/useAddCommentDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import AddCommentDialog from "./[dialog]/AddCommentDialog";
import { useRouter } from "next/navigation";

const schema = z.object({
  comment: z.string().min(1, { message: `Please enter a comment` }),
});
type ISchema = z.infer<typeof schema>;

type BlogCommentProps = {
  blogId: string;
  comments: IComment[];
};

const BlogComment = ({ comments, blogId }: BlogCommentProps) => {
  const { onOpen, onClose } = useAddCommentDialog();
  const router = useRouter();
  const form = useForm<ISchema>({
    resolver: zodResolver(schema),
  });
  const { errors } = form.formState;

  const onSubmit = async (data: ISchema) => {
    const comment = await createComment({
      blog_id: blogId,
      detail: data.comment,
    });

    if (comment.id) {
      toast.success(`Comment addded`);
      form.reset({ comment: "" });
      router.refresh();
    } else {
      toast.error(`Failed to comment`);
    }
  };

  return (
    <div>
      <Button
        variant={"outline"}
        onClick={onOpen}
        className="border border-primary text-primary text-sm sm:hidden"
      >
        Add Comments
      </Button>
      <form
        className="my-4 hidden sm:block"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Textarea
          placeholder="What's on your mind..."
          {...form.register("comment")}
        />
        {errors.comment ? (
          <p className="text-red-500 text-xs">{errors.comment.message}</p>
        ) : null}
        <div className="flex items-center justify-end gap-2  my-2">
          <Button
            variant={"outline"}
            className="text-primary border-primary w-[105px]"
          >
            Cancel
          </Button>
          <Button variant={"default"} type="submit" className="w-[105px]">
            Post
          </Button>
        </div>
      </form>
      {comments.map((commentData, idx) => {
        return (
          <div className="flex justify-start gap-2 my-4" key={commentData.id}>
            <div>
              <Avatar>
                <AvatarImage src="/images/no-profile-image.webp" />
              </Avatar>
            </div>
            <div className="pt-1">
              <div className="flex items-center gap-2">
                <p className="text-sm">{commentData?.User?.username}</p>
                <p className="text-xs text-clr-gray-300">5 min ago</p>
              </div>
              <p className="font-normal my-4 text-xs">{commentData.detail}</p>
            </div>
          </div>
        );
      })}
      <AddCommentDialog blogId={blogId} />
    </div>
  );
};

export default BlogComment;
