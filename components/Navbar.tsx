import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../utils";

import useAuthStore from "../store/authStore";

const Navbar = () => {
  const user = false;
  const { userProfile, addUser, removeUser } = useAuthStore();

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px]">
          <Image
            className="cursor-pointer"
            src="/img/logo2.jpeg"
            layout="responsive"
            width="30"
            height="20"
            objectFit="contain"
          />
        </div>
      </Link>

      <div>SEARCH</div>

      <div className="flex gap-2 p-2 font-semibold cursor-pointer">
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" /> {` `}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href="/">
                <>
                  <Image
                    width={42}
                    height={42}
                    className="rounded-full cursor-pointer"
                    src={userProfile.image}
                    alt="profile shoot"
                  />
                </>
              </Link>
            )}
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Error")}
          />
        )}
        <button
          type="button"
          className="px-2"
          onClick={() => {
            googleLogout();
            removeUser();
          }}
        >
          <AiOutlineLogout color="red" fontSize="21" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
