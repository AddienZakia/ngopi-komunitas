import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

import Image from "next/image";

export default function Home() {
  return (
    <section className="text-center min-h-screen flex flex-col justify-center items-center">
      <Image
        src="/meledak.png"
        width={6021}
        height={5502}
        alt="coming soon"
        className="w-[50%] min-[500px]:w-[40%] md:w-[20%]"
      />

      <h1 className="mt-3 max-[400px]:text-4xl text-5xl font-bold">
        Coming Soon!
      </h1>
      <p className="max-[400px]:w-[90%] w-[80%] mt-3">
        Kita lagi siapin sesuatu yang keren banget nih! Stay tuned ya!
      </p>

      <Link href="https://www.instagram.com/ngopi.komunitas/">
        <div className="flex justify-center items-center space-x-3 text-cream_nogen bg-merah_nogen mt-3 px-4 py-3 rounded-lg transition duration-200 hover:bg-merah_nogen/90 cursor-pointer">
          <FaInstagram className="text-3xl" />
          <p>Follow Instagram Kami</p>
        </div>
      </Link>
    </section>
  );
}
