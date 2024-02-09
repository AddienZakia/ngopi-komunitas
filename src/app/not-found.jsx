import { MdHome } from "react-icons/md";
import Link from "next/link";

import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Home() {
  return (
    <section className="overflow-hidden relative text-center min-h-screen flex flex-col justify-center items-center">
      <Image
        src="/404/gelombang_atas.png"
        width={2880}
        height={422}
        alt="gelombang atas"
        className="absolute top-0 lg:-top-10 xl:-top-20"
      />

      <Image
        src="/404/gelombang_bawah.png"
        width={2880}
        height={392}
        alt="gelombang bawah"
        className="-z-10 absolute bottom-0 lg:-bottom-10 xl:-bottom-20"
      />

      <div className="relative">
        <Image
          src="/meledak.png"
          width={2880}
          height={5502}
          alt="gelombang bawah"
          className={twMerge(
            "z-10 absolute top-0",
            "w-[25%] left-10 -top-5",
            "sm:w-[20%] sm:left-20",
            "md:left-36 md:-top-12",
            "xl:-top-10 xl:left-40 xl:w-[15%]"
          )}
        />

        <Image
          src="/loading.png"
          width={2880}
          height={2510}
          alt="gelombang bawah"
          className={twMerge(
            "z-10 absolute bottom-0",
            "w-[20%] right-10",
            "sm:w-[15%] sm:right-28",
            "md:right-40 md:w-[12%]",
            "xl:-bottom-0 xl:right-40 xl:w-[12%]"
          )}
        />

        <Image
          src="/404/back.png"
          width={864}
          height={541}
          alt="back"
          className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[50%] mx-auto"
        />

        <div className="absolute top-0 flex justify-center items-center w-full h-full">
          <h1
            className="text-cream_nogen font-bold text-6xl min-[500px]:text-[80px] md:text-[96px] xl:text-[126px] rotate-2"
            style={{
              textShadow: "-4.5px 3px 0px rgba(0, 0, 0, 1)",
            }}
          >
            404
          </h1>
        </div>
      </div>
      <p className="my-5 font-medium w-[80%] md:text-xl">
        Sorry, the page you were looking for could not be found
      </p>
      <Link href="/">
        <div className="z-20 flex justify-center items-center space-x-3 text-cream_nogen bg-merah_nogen px-4 py-3 rounded-lg transition duration-200 hover:bg-merah_nogen/90 cursor-pointer">
          <MdHome className="text-3xl" />
          <p>Back to main</p>
        </div>
      </Link>
    </section>
  );
}
