// buat home
import Link from "next/link";
import { useRef } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function index() {
  const featureSection = useRef(null);

  const scrollDown = () => {
    window.scrollTo({
      top: featureSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    // ngerubah font
    // fungsionalitas > minor details
    <div id="layout" className="min-h-screen relative bg-white">
      {/* sebelum login gabisa akses fitur, tambahin pop up untuk login dulu. foto profil diganti ke button login */}
      <Navbar />

      <div id="body">
        {/* hero h-[493px]*/}
        <div className="hero min-h-screen  bg-white">
          <div className="hero-content text-center text-black">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold">BLOCKCHAIN PROJ.</h1>
              <p className="py-6 w-[507px]">
                Empowering trust through blockchain. Seamlessly manage, secure,
                and track documents. Elevate transparency, collaboration, and
                data integrity with our cutting-edge document handling solution.
              </p>
              {/* auto scroll ke bagian fitur */}
              <button
                className="btn btn-bBlack text-white rounded-none"
                onClick={scrollDown}
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div ref={featureSection}>
          <div className="grid grid-cols-2 h-[816px] bg-base text-black">
            {/* left side */}
            <div
              id="col-1 row-1"
              className=" flex flex-col items-center justify-center bg-red"
            >
              <p className="font-semibold text-5xl w-[386px] text-justify">
                Some awesome features you need to know and see.
              </p>
              <p className="w-[386px] text-justify mt-[15px]">
                Seamlessly empower: upload, retrieve, and navigate through
                documents. Effortless control over your data, from storage to
                access.
              </p>

              <div className="w-[399px]">
                <button className="btn btn-bBlack text-white rounded-none mt-[20px] right-[10px]">
                  <Link href={"/upload"}>Explore All Features</Link>
                </button>
              </div>
            </div>
            {/* right side */}
            <div
              id="col-2"
              className="flex flex-col items-center justify-center gap-[70px] w-[435px] ml-[150px]"
            >
              <div id="feature-1">
                <Link href={"/upload"}>
                  <p className="text-xl font-semibold">Generate Document</p>
                  <p className="mt-[20px] text-justify">
                    Unleash the power of cutting-edge technology with our
                    document upload feature, fortified by blockchain innovation.
                    Your files, now more secure than ever, are seamlessly
                    uploaded and anchored within an unbreakable chain of trust.
                  </p>
                </Link>
              </div>
              <div id="feature-2">
                <Link href={"/retrieve"}>
                  <p className="text-xl font-semibold">Retrieve Document</p>
                  <p className="mt-[20px] text-justify">
                    Unlock a new era of document retrieval. With blockchain at
                    its core, your files are impervious to compromise.
                    Seamlessly access records with absolute confidence, knowing
                    every retrieval is fortified by unyielding security.
                  </p>
                </Link>
              </div>
              <div id="feature-3">
                <Link href={"/documentlist"}>
                  <p className="text-xl font-semibold">List Document</p>
                  <p className="mt-[20px] text-justify">
                    Elevate transparency in document progress. Harness the power
                    of blockchain for an indelible record of every change. Rest
                    assured with an unalterable audit trail, ensuring your
                    documents' journey is fortified by the strongest security.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* debugged */}
        {/* <div className="flex items-center justify-between max-w-screen-xl mx-auto gap-5">
          <div className="flex flex-col w-1/2">
            <p className="text-5xl font-semibold">
              Ini adalah contoh kalimat yang banyak.
            </p>
            <p>
              Kalo ini contoh text tapi kecil, tapi agak banyak aowke aowjkd
              ajfh ajkshdfg asjkhdfgb asjkhdfg asjkhf gasjkhfg asjkhdfg asjkhfg
              asjk
            </p>
            <div className="">
              <button className="px-3 py-2 bg-black text-white">
                Explore All Features
              </button>
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-5xl font-semibold">
              Ini adalah contoh kalimat yang banyak.
            </p>
            <p>
              Kalo ini contoh text tapi kecil, tapi agak banyak aowke aowjkd
              ajfh ajkshdfg asjkhdfgb asjkhdfg asjkhf gasjkhfg asjkhdfg asjkhfg
              asjk
            </p>
          </div>
        </div> */}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
