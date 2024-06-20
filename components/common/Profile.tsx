"use client";

import { Avatar, AvatarImage } from "../ui/avatar";

type ProfileProps = {
  profile_image: string;
  name: string;
  active_at?: string;
};

const Profile = (props: ProfileProps) => {
  return (
    <div className="flex items-center justify-start gap-2 text-white">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <p className="text-clr-text text-sm font-bold">{props.name}</p>
      <p className="text-xs text-clr-gray-300">{props.active_at} min ago</p>
    </div>
  );
};

export default Profile;
