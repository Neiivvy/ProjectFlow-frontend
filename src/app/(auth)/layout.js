import React from "react";
import hero from "@/assets/images/AuthImg.png";
import Image from "next/image";
import Link from "next/link";
import { Home_route } from "@/constants/routes";

const AuthLayout = ({ children }) => {
  return (
    <section className="h-screen overflow-hidden bg-[#f7faf4]">
      <div className="container mx-auto px-4 h-full flex items-center">

        <div className="grid lg:grid-cols-2 min-h-150 w-full shadow-xl rounded-2xl overflow-hidden border border-[#bfc9c1] bg-white">

          {/* Image */}
          <div className="relative hidden lg:block h-full">
            <Image
              src={hero}
              alt="Auth Hero"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-[#0f5238]/20" />
          </div>

          {/* Form */}
          <div className="flex flex-col items-center justify-center p-6 overflow-y-auto bg-[#f7faf4]">

            {/* Home link */}
            <Link
              href={Home_route}
              className="flex items-center gap-2 text-[#0f5238] mb-10 self-center"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f5238] text-white text-sm font-bold">
                PC
              </span>
              <span className="font-semibold tracking-tight text-[#0f5238]">
                Project Clarity
              </span>
              <span className="sr-only">Home</span>
            </Link>

            {children}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AuthLayout;