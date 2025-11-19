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
      className={`h-25 font-bold bg-tertiary border-b border-alt-black flex justify-between items-center ${dm_sans.className}`}
    >
      <div className="flex items-center gap-8 h-full">
        <div className="px-8 h-full text-2xl border-r border-alt-black flex items-center justify-center">
          AURELON
        </div>

        <div className="text-lg flex items-center gap-3">
          {time} <LuGlobe className="size-6" /> United States
        </div>
      </div>

      <div className="flex items-center gap-8 h-full">
        <div className="flex gap-8 text-lg">
          {navMenus.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:underline">
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="group bg-alt-black border-x border-alt-black hover:bg-alt-secondary hover:text-alt-black transition-colors duration-500 ease-in-out h-full text-white px-12 text-lg flex items-center justify-center font-bold"
        >
          EXPLORE
          <GoArrowUpRight className="size-6 ml-2 transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </nav>
  );
}

const navMenus = [
  {
    href: "/rituals",
    label: "Rituals",
  },
  {
    href: "/skin-lab",
    label: "Skin Lab",
  },
  {
    href: "/light-studies",
    label: "Light Studies",
  },
  {
    href: "/texture",
    label: "Texture",
  },
  {
    href: "/archive",
    label: "Archive",
  },
];
