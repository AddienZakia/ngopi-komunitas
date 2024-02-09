"use client";
import React from "react";
import Image from "next/image";
import { clsxm } from "../utils";
import Aos from "aos";

import Link from "next/link";

export default function Rsvp() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className={clsxm(
        "overflow-hidden relative bg-hitam_nogen text-cream_nogen flex flex-col md:flex-row justify-center items-center px-10 lg:px-20 py-12 lg:py-20",
        "space-y-5 md:space-y-0 md:space-x-10 border-b-4 border-merah_nogen xl:space-x-20"
      )}
    >
      <Image
        src="/background_grid.png"
        width={998}
        height={1085}
        alt="gambar"
        className="absolute -top-10 left-0 w-[80%] min-[500px]:w-[55%] sm:w-[45%] md:w-[35%] lg:w-[25%] xl:w-[25%]"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <Image
        src="/rsvp/list_box.png"
        width={330}
        height={330}
        alt="gambar"
        className="opacity-20 absolute bottom-0 right-0 min-[500px]:right-0 md:right-10 w-[30%] min-[500px]:w-[25%] sm:w-[20%] md:w-[15%] lg:w-[13%] xl:w-[12%]"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
      />

      <Image
        src="/rsvp/gambar.png"
        width={844}
        height={868}
        alt="gambar"
        className="z-10 w-[90%] min-[500px]:w-[60%] sm:w-[40%] lg:w-[30%] xl:w-[25%]"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      />
      <div className=" lg:w-[70%] xl:w-[40%]">
        <h1
          className="text-3xl lg:text-4xl font-extrabold [@media(max-width:365px)]:text-[28px]"
          style={{
            textShadow: "-3px 2px 0px rgba(186, 41, 41, 1)",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Fill out the RSVP to Register
        </h1>
        <p
          className="mt-3 text-justify indent-5 lg:text-xl"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          Join the <span className="text-merah_nogen">#futurerevolution</span>{" "}
          journey with{" "}
          <span className="text-merah_nogen">Ngopi Komunitas!</span> Register
          now through this RSVP to{" "}
          <span className="text-merah_nogen">
            experience collaborative spirit
          </span>{" "}
          and new insights about{" "}
          <span className="text-merah_nogen">automotive</span>. Don&apos;t miss
          the opportunity to unite in the{" "}
          <span className="text-merah_nogen">excitement</span> of this event!
        </p>
        <div
          className="flex justify-center items-center md:justify-start space-x-5 mt-5"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <Link href="/daftar">
            <div className="mx-auto xl:mx-0 z-20 flex justify-center items-center space-x-3 text-cream_nogen bg-merah_nogen px-4 py-3 rounded-lg transition duration-200 hover:bg-merah_nogen/90 cursor-pointer w-fit">
              <p>Register Yours</p>
            </div>
          </Link>

          <Link href="/">
            <p>Feedback</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
