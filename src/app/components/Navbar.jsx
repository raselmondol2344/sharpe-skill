'use client'
import React from "react";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const Links = (
    <>
      <Link href={"/"}>
        <li className="mr-4 font-bold ">Home</li>
      </Link>
      <Link href={"/pages/courses"}>
        <li className="mr-4 font-bold ">Course</li>
      </Link>
      <Link href={"/pages/pfofile"}>
        <li className="mr-4 font-bold ">Profile</li>
      </Link>
    </>
  );

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="navbar  sticky top-0 z-50 bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu   menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <Link
          href={"/"}
          className=" text-2xl md:text-4xl lg:text-4xl font-bold text-blue-900"
        >
          SHARPE <span className="text-orange-600">SKILL</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 ">{Links}</ul>
      </div>
      <div className="navbar-end flex gap-5 items-center">

       {
        user?
         <>
        
        <Button variant="danger" onClick={handleLogout}>sign out</Button>
      

        <Link href={'/pages/profile'}>
        <Avatar>
        <Avatar.Image
         alt="John Doe" 
        src={user?.image} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
        </Link>
        </>
        :
        <>
        <Link href={"/pages/login"}>
          <Button className={'bg-blue-400'}>sign in</Button>
        </Link>
        <Link href={"/pages/signup"}>
          <Button className={'bg-cyan-500'}>sign up</Button>
        </Link>
        </>
       }
      </div>
    </div>
  );
};

export default Navbar;
