"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

import Image from "next/image";

export default function About() {
  return (
    <section className="overflow-hidden relative flex flex-col justify-center items-center xl:flex-row xl:justify-center xl:items-start py-40 max-[500px]:px-8 px-10 md:px-20 lg:px-36 xl:px-32 xl:space-x-20 xl:space-y-0 space-y-10">
      {/* particle */}
      <div>
        <Image
          src="/about/cup.png"
          width={678}
          height={820}
          alt="cup"
          className="-z-10 max-[400px]:w-[60%] w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%] xl:w-[20%] absolute left-0 xl:-bottom-16 lg:-bottom-20 md:-bottom-16 sm:-bottom-16 -bottom-12"
        />

        <Image
          src="/about/coffee.png"
          width={376}
          height={292}
          alt="coffee"
          className="max-[400px]:w-[35%] w-[30%] sm:w-[25%] md:w-[20%] lg:w-[15%] xl:w-[10%] absolute top-5 right-0"
        />
      </div>

      <div className="-space-y-8 max-[350px]:-space-y-5 border-y-4 border-hitam_nogen max-[550px]:px-5 px-10 pb-8">
        <h1 className="max-[550px]:text-[96px] max-[350px]:text-[70px] max-[440px]:text-[86px] text-[128px] font-extrabold">
          About
        </h1>
        <h1 className="text-justify text-merah_nogen max-[350px]:text-2xl max-[440px]:text-3xl max-[550px]:text-[34px] text-[44px] font-extrabold">
          Ngopi Komunitas
        </h1>
      </div>
      <div className="">
        <p className="text-xl sm:text-2xl text-justify indent-10 font-medium">
          <span className="text-merah_nogen">Ngopi komunitas</span> is a talk
          show event attended by automotive communities with the theme{" "}
          <span className="text-merah_nogen">
            &quot;Electric Mobility: Charging the Future&quot;
          </span>
          . by presenting material on{" "}
          <span className="text-merah_nogen">
            the impact of electric mobility
          </span>{" "}
          in shaping the future of sustainable transportation. The discussion
          will focus on the concept that through{" "}
          <span className="text-merah_nogen">electric vehicles</span>, we are
          not only replacing our energy sources, but also proactively
          contributing solutions to global{" "}
          <span className="text-merah_nogen">environmental challenges</span>.
        </p>

        <Link href="/">
          <div className="mx-auto xl:mx-0 mt-5 z-20 flex justify-center items-center space-x-3 text-cream_nogen bg-merah_nogen px-4 py-3 rounded-lg transition duration-200 hover:bg-merah_nogen/90 cursor-pointer w-fit">
            <FaInstagram className="text-3xl" />
            <p>Kembali Ke Beranda</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
