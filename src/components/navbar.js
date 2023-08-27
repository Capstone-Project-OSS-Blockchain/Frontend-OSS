import Link from "next/link";
import LoginNavbar from "./loginNavbar";
import AvatarNavbar from "./avatarNavbar";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [storedToken, setStoredToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setStoredToken(storedToken);
    } else {
      alert("Please login before using the features");
      router.push("/login");
    }
  }, [router]);

  // const [isLogin, setIsLogin] = useState(false);
  // const loginSuccess = () => {
  //   setIsLogin(true);
  // };

  return (
    <div className="navbar font-inter text-black bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-navbar"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href={"/upload"}>Features</Link>
            </li>

            <li>
              <a>Guide</a>
            </li>

            <li>
              <a>FAQ</a>
            </li>

            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-ghost normal-case text-xl ml-[75px]"
          href={"/"}
        >
          OSS BLOCKCHAIN
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/upload"}>Features</Link>
          </li>

          <li>
            <a>Guide</a>
          </li>

          <li>
            <a>FAQ</a>
          </li>

          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-[112.25px]">
        {!storedToken ? <LoginNavbar /> : <AvatarNavbar />}

        {/* <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text pr-[3px]"> EN </span>
            <input type="checkbox" className="toggle toggle-success" />
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
