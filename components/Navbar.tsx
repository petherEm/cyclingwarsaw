import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../utils";

import useAuthStore from "../store/authStore";

import { topics } from "../utils/constants";

const Navbar = () => {
  const user = false;
  const router = useRouter();
  const { topic } = router.query;

  const { userProfile, addUser, removeUser } = useAuthStore();
  const [open, isSetOpen] = useState(false);

  const openHandler = () => {
    !open ? isSetOpen(true) : isSetOpen(false);
  };

  return (
    <div className="bg-[#409DC2] w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4 shadow-lg">
      <Link href="/">
        <div className="w-[100px]">
          <Image
            className="cursor-pointer"
            src="/img/logo9.png"
            layout="responsive"
            width="12"
            height="10"
            objectFit="contain"
          />
        </div>
      </Link>

      <div className="hidden md:flex items-center list-none lg:gap-x-4 md:gap-x-4 font-bold text-white">
        <a className="hover:border-b-2 cursor-pointer p-2">O nas</a>

        <Link href="/trips/bialowieza">
          <a className="hover:border-b-2 cursor-pointer border-2 border-red-600 p-2">
            Białowieża '22
          </a>
        </Link>
        <Link href="/trips/r10_22">
          <a className="hover:border-b-2 cursor-pointer border-2 border-red-600 p-2">
            R10 '22
          </a>
        </Link>

        <a className="hover:border-b-2 cursor-pointer p-2">Kontakt</a>
      </div>

      <div className="flex gap-2 p-2 font-semibold cursor-pointer">
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            {/* <Link href="/">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" /> {` `}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link> */}
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
            text="signin"
            shape="circle"
            size="medium"
            locale="en"
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

      {/* Hamburger Menu */}

      <div className="md:hidden">
        <button
          id="menu-btn"
          type="button"
          className={
            open
              ? "open z-40 block hamburger md:hidden focus:outline-none"
              : "z-40 block hamburger md:hidden focus:outline-none"
          }
          onClick={openHandler}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          open
            ? "absolute z-30 top-0 bottom-0 left-0 flex md:hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg font-thin text-white uppercase bg-black"
            : "absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg font-thin text-white uppercase bg-black"
        }
        onClick={openHandler}
      >
        <Link href="/">
          <a className="hover:text-indigo-500">O nas</a>
        </Link>
        <Link href="/trips/bialowieza">
          <a className="border-2 border-red-500 w-fit p-2 hover:text-indigo-500">
            Białowieża '22
          </a>
        </Link>
        <Link href="/trips/r10_22">
          <a className="hover:text-indigo-500">R10 '22</a>
        </Link>
        <Link href="/">
          <a className="hover:text-indigo-500">Kontakt</a>
        </Link>
        <hr className="text-white p-4" />
        <div className="">
          <h1 className="font-semibold mb-4">Zrealizowane wyprawy</h1>
          {topics.map((item) => (
            <Link href={`${item.url}`} key={item.name}>
              <div className="">
                <div className="flex flex-col">
                  <span className="capitalize">
                    {item.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
