import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

import Image from "next/image";

export default function Home() {
  return (
    <section className="text-center min-h-screen flex flex-col justify-center items-center">
      <Image
        src="/loading.png"
        width={2880}
        height={2510}
        alt="error"
        className="w-[50%] min-[500px]:w-[40%] md:w-[15%]"
      />

      <h1 className="mt-3 max-[400px]:text-4xl text-5xl font-bold">
        Not Found
      </h1>
      <p className="max-[400px]:w-[90%] w-[80%] xl:w-[25%] md:w-[40%] mt-3">
        Maaf halaman yang anda cari tidak tersedia. Silahkan kembali ke beranda
      </p>

      <Link href="/ ">
        <div className="flex justify-center items-center text-cream_nogen bg-merah_nogen mt-3 px-4 py-3 rounded-lg transition duration-200 hover:bg-merah_nogen/90 cursor-pointer">
          <p>Kembali Ke Beranda</p>
        </div>
      </Link>
    </section>
  );
}
