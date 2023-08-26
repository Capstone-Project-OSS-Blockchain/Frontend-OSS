import Link from "next/link";

const LoginNavbar = () => {
  return (
    <button className="btn btn-xs btn-bBlack text-white rounded-none mr-[24px]">
      <Link href={"/login"}>Login</Link>
    </button>
  );
};

export default LoginNavbar;
