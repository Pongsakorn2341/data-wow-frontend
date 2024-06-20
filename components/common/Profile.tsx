"use client";

import dayjs from "dayjs";
import { Avatar, AvatarImage } from "../ui/avatar";
import { dateFromNow } from "@/lib/dayjs/dayjs";

type ProfileProps = {
  profile_image: string;
  name: string;
  active_at: string;
};

const Profile = (props: ProfileProps) => {
  return (
    <div className="flex items-center justify-start gap-2 text-white">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <p className="text-clr-text text-sm font-bold">{props.name}</p>
      <p className="text-xs text-clr-gray-300">
        {dateFromNow(dayjs(props.active_at))}
      </p>
    </div>
  );
};

export default Profile;
