// buat home
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import index from "..";

const DocumentList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("documentData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div id="layout" className="min-h-screen relative bg-white">
      <Navbar />
      {/* <div className="navbar font-inter text-black bg-white">
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
            BLOCKCHAIN PROJ.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <a>Features</a>
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
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text pr-[3px]">🇬🇧 EN </span>
              <input type="checkbox" className="toggle" />
            </label>
          </div>
        </div>
      </div> */}
      <div id="body" className="grid grid-cols-2">
        {/* left grid */}

        <div id="col-1" className="ml-[100px] mt-[84px]">
          {/* heading */}
          <p className="text-zinc-900 text-[40px] font-semibold leading-[52px]">
            Features.
          </p>
          {/* card */}
          <div
            id="imgDesc"
            className="card lg:card-side bg-gray-100 shadow-xl mt-[43px]"
          >
            <img
              src="/upload.svg"
              alt="Upload Docs Illustration"
              width={170}
              height={170}
              className="ml-[30px]"
            />

            <div className="card-body w-[508px] h-[200px] rounded-3xl">
              <h2 className="card-title text-zinc-900 text-lg font-semibold">
                Upload Document
              </h2>
              <p className="text-zinc-600 text-sm">
                Unleash the power of cutting-edge technology with our document
                upload feature, fortified by blockchain innovation. Your files,
                now more secure than ever, are seamlessly uploaded and anchored
                within an unbreakable chain of trust. Embrace worry-free
                collaboration as tamper-proof records guarantee data integrity.
              </p>
            </div>
          </div>
          <div
            id="imgDesc"
            className="card lg:card-side bg-gray-100 shadow-xl mt-[43px]"
          >
            <img
              src="/download.svg"
              alt="download Docs Illustration"
              width={175}
              height={175}
              className="ml-[30px]"
            />

            <div className="card-body w-[508px] h-[200px] rounded-3xl">
              <h2 className="card-title text-zinc-900 text-lg font-semibold">
                Retrieve Document
              </h2>
              <p className="text-zinc-600 text-sm">
                Unlock a new era of document retrieval. With blockchain at its
                core, your files are impervious to compromise. Seamlessly access
                records with absolute confidence, knowing every retrieval is
                fortified by unyielding security.
              </p>
            </div>
          </div>
          <div
            id="imgDesc"
            className="card lg:card-side bg-gray-100 shadow-xl mt-[43px]"
          >
            <img
              src="/track.svg"
              alt="Document List Illustration"
              width={145}
              height={145}
              className="ml-[30px]"
            />

            <div className="card-body w-[508px] h-[200px] rounded-3xl">
              <h2 className="card-title text-zinc-900 text-lg font-semibold">
                Document List
              </h2>
              <p className="text-zinc-600 text-sm">
                Elevate transparency in document progress. Harness the power of
                blockchain for an indelible record of every change. Rest assured
                with an unalterable audit trail, ensuring your documents'
                journey is fortified by the strongest security.
              </p>
            </div>
          </div>
        </div>

        {/* right grid */}
        <div id="col-2">
          <div className="tabs ml-[84px] mt-[98px]">
            <Link className="tab tab-lifted" href="/upload">
              Upload
            </Link>
            {/* insert here */}
            <Link className="tab tab-lifted" href="/retrieve">
              Retrieve
            </Link>
            {/* insert here */}
            <Link className="tab tab-lifted tab-active" href="/documentlist">
              Document List
            </Link>
            {/* insert here */}
          </div>

          <div id="documentList">
            <div className="overflow-scroll  ml-[84px] mt-[35px]">
              <table className="table table-zebra flex flex-col items-start ">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>File Name</th>
                    <th>Last Added By</th>
                    <th>Date Modified</th>
                    <th>Audit Trail</th>
                  </tr>
                </thead>
                <tbody>
                  {data ? (
                    data.files.map(document, (index) => {
                      return (
                        <tr>
                          <th>{index++}</th>
                          <td>{document.filename}</td>
                          <td>{document.timestamp}</td>
                          {/* button donlot */}
                          <td>Blue</td>
                          <td></td>
                        </tr>
                      );
                    })
                  ) : (
                    <h1>Document unavailable</h1>
                  )}
                  ;
                </tbody>
              </table>
              {/* pagination */}
              <div className="mt-[20px] flex flex-col items-center justify-center">
                <div className="join">
                  <button className="join-item btn btn-outline">First</button>
                  <button className="join-item btn btn-active text-white">
                    1
                  </button>
                  <button className="join-item btn text-white">2</button>
                  <button className="join-item btn text-white">3</button>
                  <button className="join-item btn btn-outline">Last</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentList;
