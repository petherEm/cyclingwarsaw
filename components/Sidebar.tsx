import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const userProfile = false;

  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justfify-center xl:justify-start cursor-pointer font-semibold text-[#F51997 rounded";

  return (
    <div className="hidden md:flex">
      <div
        className="hidden md:hidden xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {/* {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />} */}
      </div>
      {showSidebar && (
        <div className="xl:w-[200px] w-24 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-0 md:p-2 items-center">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For You</span>
              </div>
            </Link>
          </div>

          <Discover />
          {/* <SuggestedAccounts /> */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
