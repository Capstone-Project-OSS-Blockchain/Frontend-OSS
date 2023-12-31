// buat home
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const requestBody = JSON.stringify({ email, username, password });
      const response = await axios.post(
        "https://backend-oss-production.up.railway.app/register",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      const { message, token } = response.data;
      alert(message);
      if (token) {
        localStorage.setItem("token", token);
        router.push("/upload");
      } else {
        alert("Please login as user");
      }
    } catch (err) {
      console.error("Axios Error:", err);
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.error);
      } else {
        alert("An error occurred while processing your request.");
      }
    }
  };

  return (
    <div
      id="background"
      className="grid grid-cols-2 min-h-screen relative bg-layout"
    >
      <div id="col-1" className="ml-[100px]">
        {/* Config font style */}
        <Link href={"/"}>
          <p className="text-cBlack my-[96px]  font-bold">OSS BLOCKCHAIN</p>
        </Link>
        <div className="text-zinc-900 text-[56px] font-semibold leading-[78.40px]">
          <p>Welcome to</p>
          <p>OSS BLOCKCHAIN.</p>
        </div>
        <p className="text-zinc-600 text-lg font-semibold">
          Fill up the form to create a new account.
        </p>
      </div>
      <div id="col-2">
        <div id="inputArea" className="mt-[177px]">
          <div>
            <form
              id="formArea"
              className="bg-white rounded-2xl w-[710px] h-[500px]"
              action=""
              method="POST"
            >
              <div className="w-[580px] h-[81px] flex-col justify-start gap-2.5 inline-flex mt-[45px] ml-[63.5px]">
                <div className="text-zinc-600 text-lg font-normal leading-relaxed">
                  Username
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="JohnDoe"
                  className="px-[27px] py-[9px] text-black text-base font-normal bg-white rounded-sm border mt-[10px]"
                  value={username}
                  onChange={handleChangeUsername}
                />
              </div>

              <div className="w-[580px] h-[81px] flex-col justify-start gap-2.5 inline-flex mt-[30px] ml-[63.5px]">
                <div className="text-zinc-600 text-lg font-normal leading-relaxed">
                  Email Address
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="email@mail.com"
                  className="px-[27px] py-[9px] text-black text-base font-normal bg-white rounded-sm border mt-[10px]"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>

              <div className="w-[580px] h-[81px] flex-col justify-start inline-flex mt-[30px] ml-[63.5px]">
                <div className="text-zinc-600 text-lg font-normal leading-relaxed">
                  Password
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="px-[27px] py-[9px] text-black text-base font-normal bg-white rounded-sm border mt-[10px]"
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>

              {/* <div className="w-[580px] h-[81px] flex-col justify-start gap-2.5 inline-flex ml-[63.5px]">
                  <div className="text-zinc-600 text-lg font-normal leading-relaxed">
                    Password
                  </div>
                  <div className="w-[580px] h-[45px] bg-white rounded-sm border border-gray-200 justify-start items-start gap-2.5 inline-flex">
                    <div className="px-[27px] py-[9px] text-stone-300 text-base font-normal">
                      Placeholder here
                    </div>
                  </div>
                </div> */}
              <div className="flex items-center justify-between px-[63.5px]">
                <p className="mt-[69.5px] text-zinc-600">
                  Already have an account?
                  <Link href={"/login"}>
                    <span className="font-bold "> Sign in</span>
                  </Link>
                </p>
                <button
                  className="justify-end w-[143px] h-[50px] mt-[54px] text-white bg-cBlack rounded-md active:scale-105 transition-all"
                  type="submit"
                  onClick={submitHandler}
                >
                  Sign Up
                </button>
              </div>
            </form>
            {/* spacing belum bisa */}
            {/* <div
              id="policies"
              className="text-zinc-600 flex gap-1 justify-end mr-[132.5px] mt-[42px]"
            >
              <a href="/">
                <p>Privacy </p>
              </a>
              <p>|</p>
              <a href="/">
                <p> Terms</p>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
