import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-hitam_nogen py-16 space-y-10">
      <div className="flex justify-center items-center space-x-5">
        <Image
          src="/logo.jpg"
          width={844}
          height={868}
          alt="gambar"
          className="w-[20%] min-[500px]:w-[15%] md:w-[10%] xl:w-[8%] rounded-full"
        />
        <h1 className="text-merah_nogen font-extrabold text-2xl md:text-3xl lg:text-4xl">
          Ngopi <span className="text-cream_nogen">Komunitas</span>
        </h1>
      </div>

      <p className="text-cream_nogen text-center w-[80%] mx-auto">
        © Copyright 2024{" "}
        <span className="text-merah_nogen">Nogogeni ITS Team</span> . All rights
        reserved
      </p>
    </section>
  );
}
