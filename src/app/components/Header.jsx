"use client";
import React, { useState } from "react";
import { clsxm } from "./utils";
import Image from "next/image";
import Link from "next/link";

import { FaBars } from "react-icons/fa";

export default function Header() {
  const [active, setactive] = useState(false);

  return (
    <section id="header" className="text-cream_nogen mt-8 max-[400px]:mt-5">
      {/*  */}
      <div className="-z-20 bg-merah_nogen w-full h-32 absolute top-0"></div>

      {/* bg hitam */}
      <div
        onClick={() => setactive((pre) => !pre)}
        className={clsxm(
          "md:hidden absolute inset-0 w-full h-full bg-hitam_nogen/40 transition-all duration-200",
          active ? "block" : "hidden"
        )}
      ></div>

      {/* header */}
      <div className="bg-hitam_nogen py-3">
        {/* logo */}
        <div className="bg-hitam_nogen border-y-2 border-cream_nogen px-8 md:px-12 py-5 flex justify-between items-center">
          <div className="z-30 absolute top-0 bg-cream_nogen flex flex-col justify-center items-center px-2 py-5 rounded-bl-xl rounded-br-xl">
            <Image
              src="/header/logo_header.png"
              width={130}
              height={235}
              alt="logo header"
              className="w-[35%] md:w-[40%]"
            />
            <div className="text-center text-merah_nogen font-semibold">
              <h3>Ngopi</h3>
              <h3 className="text-hitam_nogen">Komunitas</h3>
            </div>
          </div>

          <div className="w-[8%]"></div>
          <ul
            className={clsxm(
              "z-40 md:static flex flex-col md:flex-row md:items-center md:justify-center md:space-x-10",
              "absolute bg-hitam_nogen top-0 bottom-0 px-16 py-10 space-y-5 md:space-y-0 transition-all duration-200",
              "md:px-0 md:py-0",
              "max-[400px]:px-12",
              active ? "left-0" : "-left-96"
            )}
          >
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#teaser">Teaser</Link>
            </li>
            <li>
              <Link href="#theme">Theme</Link>
            </li>
            <Link className="md:hidden" href="/daftar">
              <li className="md:hidden font-medium bg-cream_nogen text-hitam_nogen px-5 py-2 rounded-lg cursor-pointer hover:bg-cream_nogen/90 transition duration-200">
                <p>Register</p>
              </li>
            </Link>
          </ul>

          <Link href="#rsvp">
            <div
              className={clsxm(
                "hidden md:block font-medium bg-cream_nogen text-hitam_nogen px-5 py-2 rounded-lg cursor-pointer hover:bg-cream_nogen/90 transition duration-200"
              )}
            >
              Register
            </div>
          </Link>

          <FaBars
            className="z-10 text-2xl md:hidden"
            onClick={() => setactive((pre) => !pre)}
          />
        </div>
      </div>
    </section>
  );
}
