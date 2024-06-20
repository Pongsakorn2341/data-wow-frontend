"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger className="justify-start md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="right" className="p-0 rounded-lg">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
