"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const routes = [
  {
    label: "Home",
    icon: RiHome3Line,
    href: "/",
    color: "text-clr-green-100 sm:text-clr-text",
  },
  {
    label: "Our Blog",
    icon: FaRegEdit,
    href: "/blog",
    color: "text-clr-green-100 sm:text-clr-text",
  },
];
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 p-4 flex flex-col h-full bg-clr-green-500 sm:bg-clr-gray-100 sm:text-clr-text text-white">
      <div className="px-3 py-2 flex-1 flex-col mt-4 justify-between">
        <div className="space-y-1 mt-6 sm:mt-0">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname == route.href
                  ? "text-white sm:text-clr-green-500 bg-white/30 font-semibold"
                  : "text-white text-clr-text"
              )}
            >
              <div className="flex items-center flex-1 text-clr-green-100 sm:text-clr-green-500">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    </div>
  );
};

export default Sidebar;
