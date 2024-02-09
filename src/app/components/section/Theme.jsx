"use client";
import React from "react";
import Image from "next/image";
import { clsxm } from "../utils";
import Aos from "aos";

export default function Theme() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="relative py-32 pt-72 lg:pt-0 flex flex-col-reverse lg:flex-row justify-between items-center lg:mt-32">
      <div
        className="relative text-cream_nogen bg-hitam_nogen py-12 px-10 w-full lg:w-[70%]"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        <Image
          src="/theme/motor.png"
          width={550}
          height={854}
          alt="motor"
          className={clsxm(
            "lg:hidden w-[35%] absolute xl:-top-72 left-7 rotate-90 opacity-80 transform -scale-y-100",
            "-top-36 min-[400px]:-top-44 min-[500px]:-top-52 min-[550px]:-top-[240px] sm:-top-[285px] min-[920px]:-top-[350px]",
            "md:w-[30%]"
          )}
        />

        <p
          className="opacity-50"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          Get to Know Our Theme
        </p>
        <h1
          className="text-5xl font-extrabold mb-3 text-kuning_nogen w-[70%]"
          style={{
            textShadow: "-3px 3px 0px rgba(186, 41, 41, 1)",
          }}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          Electric Mobility: Charging the Future
        </h1>
        <p
          className="w-full xl:w-[90%] leading-7"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          Electric Mobility: Charging the Future was the theme of a Ngopi
          Komunitas talkshow that focused on the central role of charging
          infrastructure in facilitating the growth of electric vehicles. By
          summarizing the economic, environmental, and convenience benefits of
          electric vehicle use, the talk aims to Revolutionize the Future! This
          talkshow theme is expected to really bring a big change in the world
          of the automotive industry by providing one example of the vehicle we
          present, the electric motorcycle.
        </p>
      </div>
      <Image
        src="/theme/motor.png"
        width={550}
        height={854}
        alt="motor"
        className={clsxm(
          "hidden lg:block lg:w-[25%] xl:w-[17%] opacity-80 rotate-90 lg:rotate-0"
        )}
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
      />
    </section>
  );
}
