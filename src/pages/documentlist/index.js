// buat home
import Link from "next/link";

export default function index() {
  return (
    <div id="layout" className="min-h-screen relative bg-white">
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
      </div>
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
                    <th>Audit Trail</th>
                    <th>Date Modified</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td></td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td></td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td></td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>4</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              {/* pagination */}
              <div className="mt-[20px] flex flex-col items-center justify-center">
                <div className="join">
                  <button className="join-item btn btn-outline">
                    Previous
                  </button>
                  <button className="join-item btn btn-active ">1</button>
                  <button className="join-item btn ">2</button>
                  <button className="join-item btn btn-outline">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-10 bg-gray-100 text-gray-600 text-base-content mt-[80px]">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
}
