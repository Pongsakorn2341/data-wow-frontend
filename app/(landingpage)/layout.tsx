import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";

const LandingPageLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full relative">
      <div className="fixed top-0 left-0 w-full z-10 bg-clr-green-500">
        <Navbar />
      </div>

      <div className="hidden h-full md:flex md:w-72 xl:w-90 md:flex-col md:fixed md:inset-y-0 md:top-16 ">
        <Sidebar />
      </div>
      <main className="pt-16 md:pl-72 xl:pl-90 md:inset-y-0 min-h-[calc(100dvh-72px)]">
        {children}
      </main>
    </div>
  );
};

export default LandingPageLayout;
