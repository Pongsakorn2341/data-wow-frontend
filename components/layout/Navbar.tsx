import SignInButton from "../common/SignInButton";
import MobileSidebar from "./MobileSidebar";

const Navbar = async () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <p className="text-white font-castoro italic text-xl">a Board</p>
      <MobileSidebar />
      <SignInButton />
    </div>
  );
};

export default Navbar;
