"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAddCommentDialog } from "@/store/useAddCommentDialog";
import AddCommentDialog from "./[dialog]/AddCommentDialog";

const comments = [
  {
    name: "Wittawat98",
    time: "12h ago",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
  },
  {
    name: "Wittawat98",
    time: "12h ago",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
  },
  {
    name: "Wittawat98",
    time: "12h ago",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
  },
  {
    name: "Wittawat98",
    time: "12h ago",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
  },
  {
    name: "Wittawat98",
    time: "12h ago",
    detail:
      "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
  },
];

const BlogComment = () => {
  const { onOpen } = useAddCommentDialog();

  return (
    <div>
      <Button
        variant={"outline"}
        onClick={onOpen}
        className="border border-primary text-primary text-sm sm:hidden"
      >
        Add Comments
      </Button>
      <div className="my-4 hidden sm:block">
        <Textarea placeholder="What's on your mind..." />
        <div className="flex items-center justify-end gap-2  my-2">
          <Button
            variant={"outline"}
            className="text-primary border-primary w-[105px]"
          >
            Cancel
          </Button>
          <Button variant={"default"} className="w-[105px]">
            Post
          </Button>
        </div>
      </div>
      {comments.map((commentData, idx) => {
        return (
          <div
            className="flex justify-start gap-2 my-4"
            key={commentData.name + idx}
          >
            <div>
              <Avatar>
                <AvatarImage src="/images/no-profile-image.webp" />
              </Avatar>
            </div>
            <div className="pt-1">
              <div className="flex items-center gap-2">
                <p className="text-sm">{commentData.name}</p>
                <p className="text-xs text-clr-gray-300">5 min ago</p>
              </div>
              <p className="font-normal my-4 text-xs">{commentData.detail}</p>
            </div>
          </div>
        );
      })}
      <AddCommentDialog />
    </div>
  );
};

export default BlogComment;
