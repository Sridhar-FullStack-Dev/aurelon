import { dm_sans } from "@/public/fonts/fonts";
import Image from "next/image";

export default function Content1() {
  return (
    <section className={`${dm_sans.className} bg-alt-primary p-8 relative`}>
      <div className="text-alt-secondary font-semibold uppercase text-2xl flex justify-between items-center">
        <h1>Aurelon Quiet Skin /</h1>
        <h1>Soft Light </h1>
        <h1>/ Human Form</h1>
        <h1>2026</h1>
        <h1>AURELÓN /</h1>
      </div>

      <div className="my-8">
        <Image
          src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg"
          alt="Aurelon Quiet Skin"
          width={1200}
          height={1200}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="text-alt-secondary font-semibold uppercase text-2xl flex justify-between items-center">
        <h1>Aurelon Quiet Skin /</h1>
        <h1>Soft Light </h1>
        <h1>/ Human Form</h1>
        <h1>2026</h1>
        <h1>AURELÓN /</h1>
      </div>
    </section>
  );
}
