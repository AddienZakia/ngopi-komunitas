"use client";
import React from "react";
import Image from "next/image";
import Aos from "aos";

export default function Movie() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="relative overflow-hidden mb-32">
      <div className="relative my-32 w-full sm:w-[80%] lg:w-[70%] xl:w-[65%] bg-hitam_nogen px-5 py-10 lg:py-12 xl:py-20 mx-auto">
        <div className="-z-10 absolute -inset-x-96 top-20 bottom-20 border-[5px] border-red-500"></div>

        {/* <Image
          src="/background_grid.png"
          width={998}
          height={1085}
          alt="bg-grid"
          className="sm:hidden opacity-50 absolute inset-0 w-[80%] min-[450px]:w-[70%] min-[550px]:w-[60%] m-auto"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="100"
        />

        <Image
          src="/bg_grid_panjang.png"
          width={998}
          height={1085}
          alt="bg-grid panjang"
          className="-z-10 opacity-50 hidden sm:block absolute inset-0 m-auto w-[90%] md:w-[85%]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        /> */}
        <Image
          src="/loading.png"
          width={2880}
          height={1085}
          alt="loading"
          className="absolute top-10 sm:top-5 left-3 sm:left-5 w-[17%] sm:w-[15%] lg:w-[13%]"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="300"
        />
        <Image
          src="/meledak.png"
          width={6021}
          height={1085}
          alt="loading"
          className="hidden md:block absolute bottom-5 right-5 w-[30%] min-[500px]:w-[25%] sm:w-[20%] md:w-[18%] xl:w-[15%]"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="500"
        />

        <h1
          className="text-center text-4xl   font-extrabold text-kuning_nogen"
          style={{
            textShadow: "-3px 3px 0px rgba(186, 41, 41, 1)",
          }}
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          After Movie
        </h1>

        {/* <h1
          className="-rotate-3 py-32 sm:py-24 lg:py-28 text-4xl sm:text-6xl text-center lg:text-6xl font-extrabold text-kuning_nogen"
          style={{
            textShadow: "-3px 3px 0px rgba(186, 41, 41, 1)",
          }}
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          Coming Soon
        </h1> */}
        <video
          width="1920"
          height="1020"
          controls
          className="z-30 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] mx-auto mt-10"
        >
          <source src="/AFTERMOVIE.mp4" type="video/mp4" className="z-20" />
        </video>
      </div>
    </section>
  );
}
