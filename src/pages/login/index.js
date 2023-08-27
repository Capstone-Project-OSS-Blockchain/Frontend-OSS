// buat home
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const requestBody = JSON.stringify({ email, password });
      const response = await axios.post(
        "https://backend-oss-production.up.railway.app/login",
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
        // router.push("/upload");
        router.push("/");
        return (
          <div className="toast toast-end">
            <div className="alert alert-success">
              <span>Login Successful</span>
            </div>
          </div>
        );
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
        <p className="text-zinc-900 text-[56px] font-semibold leading-[78.40px]">
          Welcome Back
        </p>
        <p className="text-zinc-600 text-lg font-semibold">
          Login to your account.
        </p>
      </div>
      <div id="col-2">
        <div id="inputArea" className="mt-[177px]">
          <div>
            <form
              id="formArea"
              className="bg-white rounded-2xl w-[710px] h-[385px]"
              action=""
              method="POST"
            >
              <div className="w-[580px] h-[81px] flex-col justify-start gap-2.5 inline-flex mt-[45px] ml-[63.5px]">
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

              <div className="flex items-center justify-between px-[63.5px]">
                <p className="mt-[69.5px] text-zinc-600">
                  Don’t have an account?
                  <Link href={"/signup"}>
                    <span className="font-bold "> Sign up</span>
                  </Link>
                </p>
                <button
                  className="justify-end w-[143px] h-[50px] mt-[54px] text-white bg-cBlack rounded-md active:scale-105 transition-all"
                  type="submit"
                  onClick={submitHandler}
                >
                  Login
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

export default Login;
