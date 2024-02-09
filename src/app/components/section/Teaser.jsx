"use client";
import React from "react";
import Aos from "aos";
import Image from "next/image";

export default function Teaser() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="relative bg-merah_nogen  pt-8 pb-24 -z-20">
      <div className="w-full absolute -bottom-5 z-20 border-2 border-cream_nogen mb-10"></div>
      <Image
        src="/teaser/hitam.png"
        width={2880}
        height={802}
        alt="hitam"
        className="absolute bottom-0 h-[60%] -z-10"
      />

      <Image
        src="/teaser/gambar.png"
        width={550}
        height={442}
        alt="hitam"
        className="absolute top-10 xl:w-[15%] sm:w-[18%] w-[25%]"
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-delay="300"
      />

      <h1
        className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl text-cream_nogen "
        style={{
          textShadow: "-4.5px 3px 0px rgba(0, 0, 0, 1)",
        }}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        Our Teaser
      </h1>

      <div className="bg-white rounded-md w-[80%] h-[300px] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto mt-10"></div>
      {/* <video
        width="1920"
        height="1020"
        controls
        className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto mt-10"
      >
        <source src="/teaser.mp4" type="video/mp4" />
      </video> */}
    </section>
  );
}
