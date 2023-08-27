import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const DocumentList = () => {
  const [data, setData] = useState(null);
  const [storedToken, setStoredToken] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("documentData"));
    const storedToken = localStorage.getItem("token");
    if (storedData) {
      setData(storedData);
    }
    if (storedToken) {
      setStoredToken(storedToken);
    } else {
      alert("Please login before using the features");
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleDownload = async (filename) => {
    console.log(filename);
    try {
      const response = await axios.get(
        `https://backend-oss-production.up.railway.app/download/${filename}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${storedToken}`,
          },
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = filename;

      document.body.appendChild(downloadLink);
      downloadLink.click();

      document.body.removeChild(downloadLink);

      alert("Successful download.");
    } catch (err) {
      console.error("Axios Error", err);
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.error);
      } else {
        alert("An error occurred while processing your request.");
      }
    }
  };

  return (
    <div id="layout" className="min-h-screen relative bg-white">
      <Navbar />
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
                with an unalterable audit trail, ensuring your documents journey
                is fortified by the strongest security.
              </p>
            </div>
          </div>
        </div>

        {/* right grid */}
        <div id="col-2">
          <div className="tabs ml-[84px] mt-[98px]">
            <Link className="tab tab-lifted" href="/upload">
              Generate Document
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
                <thead className="text-black size-xl">
                  <tr>
                    <th></th>
                    <th>File Name</th>
                    <th>Last Added At</th>
                    <th>Download Document</th>
                    {/* <th>Audit Trail</th> */}
                  </tr>
                </thead>
                <tbody>
                  {data ? (
                    data.files.map((document, index) => {
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{document.filename}</td>
                          <td>{document.timestamp}</td>
                          {/* button donlot */}

                          <td>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-7 h-7 ml-[50px] hover:cursor-pointer"
                              onClick={() => handleDownload(document.filename)}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                              />
                            </svg>
                          </td>
                          <td></td>
                        </tr>
                      );
                    })
                  ) : (
                    <h1 className="text-black mt-[20px] px-2 text-xl">
                      Document unavailable
                    </h1>
                  )}
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
