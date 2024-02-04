import { MdHome } from "react-icons/md";
import Link from "next/link";

import Image from "next/image";

export default function Home() {
  return (
    <section className="relative text-center min-h-screen flex flex-col justify-center items-center">
      <Image
        src="/404/gelombang_atas.png"
        width={2880}
        height={422}
        alt="gelombang atas"
        className="absolute top-0"
      />

      <Image
        src="/404/gelombang_bawah.png"
        width={2880}
        height={392}
        alt="gelombang bawah"
        className="-z-10 absolute bottom-0"
      />

      <div className="relative">
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
        Maaf halaman yang kamu cari tidak ditemukan
      </p>
      <Link href="/">
        <div className="z-20 flex justify-center items-center space-x-3 text-cream_nogen bg-merah_nogen px-4 py-3 rounded-lg transition duration-200 hover:bg-merah_nogen/90 cursor-pointer">
          <MdHome className="text-3xl" />
          <p>Kembali Ke Beranda</p>
        </div>
      </Link>
    </section>
  );
}
