"use client";

import { deleteBlog } from "@/action/blog.action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";
import { FaRegTrashCan } from "react-icons/fa6";

type DeleteBlogDialogProps = {
  id: string;
};

const DeleteBlogDialog = ({ id }: DeleteBlogDialogProps) => {
  const onDelete = async () => {
    const res = await deleteBlog(id);
    if (res.id) {
      toast.success(`Blog is deleted`);
      setTimeout(() => {
        location.reload();
      }, 1000);
    } else {
      toast.error(`Failed to delted`);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <FaRegTrashCan />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[360px] sm:max-w-[500px] text-clr-text rounded-lg bg-white mx-2">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold">
            Please confirm if you wish to delete the post
          </AlertDialogTitle>
          <AlertDialogDescription className="text-xs">
            Are you sure you want to delete the post? Once deleted, it cannot be
            recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="">Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500" onClick={onDelete}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBlogDialog;
