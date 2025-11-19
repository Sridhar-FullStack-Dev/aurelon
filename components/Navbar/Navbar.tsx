"use client";
import { dm_sans } from "@/public/fonts/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { LuGlobe } from "react-icons/lu";

export default function Navbar() {
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <nav
      className={`h-25 font-bold bg-tertiary border-b flex justify-between items-center ${dm_sans.className}`}
    >
      <div className="flex items-center gap-8 h-full">
        <div className="px-8 h-full text-2xl border-r flex items-center justify-center">
          AURELON
        </div>

        <div className="text-lg flex items-center gap-3">
          {time} <LuGlobe className="size-6" /> United States
        </div>
      </div>

      <div className="flex items-center gap-8 h-full">
        <div className="flex gap-8 text-lg">
          <Link href="/">Rituals</Link>
          <Link href="/">Skin Lab</Link>
          <Link href="/">Light Studies</Link>
          <Link href="/">Texture</Link>
          <Link href="/">Archive</Link>
        </div>

        <div className="bg-alt-black h-full text-white px-12 text-lg flex items-center justify-center font-bold">
          EXPLORE <GoArrowUpRight className="size-6 ml-2" />
        </div>
      </div>
    </nav>
  );
}
