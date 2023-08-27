import React from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const AvatarNavbar = () => {
  const router = useRouter();
  const handleSignOut = () => {
    localStorage.clear();
    router.push("/login");
    alert("You have succesfully signed out. Please log in as user.");
  };

  function App() {
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="flex items-center justify-center">
        <a id="userIcon" className="pr-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </a>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-gray rounded-box w-52"
      >
        <li>
          {/* <a className="hover:text-red-600 active:text-red-700 ">Sign out</a> */}
          <button
            className="btn flex items-center justify-center hover:text-red-600 active:text-red-700"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AvatarNavbar;
