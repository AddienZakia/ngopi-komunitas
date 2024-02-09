import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-[320px]:h-[140vh] h-[110vh] max-[550px]:h-[105vh] min-[550px]:h-[100vh] lg:h-[120vh] xl:h-screen bg-merah_nogen  text-cream_nogen py-20 pb-32 lg:py-20 px-3 text-center space-y-3">
      <h1 className="text-xl lg:text-3xl font-semibold">Electric Mobility</h1>
      <h1 className="text-5xl lg:text-[80px] font-black">
        Charging The Future
      </h1>
      <p className="w-[90%] leading-7 md:w-[70%] lg:w-[60%] font-normal lg:text-lg lg:leading-8 mt-8 mx-auto">
        Welcome to the automotive arena of revolutionizing the world with !
        #Future Revolution Embrace the change, welcome the bright future! Amidst
        innovations, we present an epic event that will change the way you think
        about mobility through a Ngopi Komunitas Talkshow. Prepare yourself to
        dive into the flow of renewable energy that is shaping the future!
      </p>
      {/* <Image
        src="/motorbike.svg"
        width={768}
        height={400}
        alt="motor"
        className="opacity-0"
      /> */}
      <Image
        src="/motorbike.svg"
        width={768}
        height={400}
        alt="motor"
        className="opacity-80 mx-auto inset-x-0 absolute bottom-0 min-[550px]:w-[80%] md:w-[60%] xl:w-[50%]"
      />
    </section>
  );
}
