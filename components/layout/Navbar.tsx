import { Button } from "../ui/button";
import MobileSidebar from "./MobileSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <p className="text-white font-castoro italic text-xl">a Board</p>
      <MobileSidebar />
      <div className="hidden sm:block">
        {/* <Button variant={"default"}>Sign in</Button> */}
        <div className="flex items-center justify-start gap-2 text-white">
          <p className="hidden sm:block">NAME</p>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
