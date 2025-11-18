import { elmsSans } from "@/public/fonts/fonts";
import { CiDesktopMouse2 } from "react-icons/ci";

export default function HeroSection() {
  return (
    <section className={`bg-tertiary ${elmsSans.className}`}>
      <div className="pt-32 px-8">
        <h1 className="text-8xl font-bold uppercase">A QUIET FUTURE</h1>

        <div className="flex justify-start items-center gap-4 mt-6">
          <div className="border-2 border-alt-black px-4 py-2 rounded-full font-bold text-sm">
            SOFT RITUAL
          </div>
          <div className="bg-alt-black text-secondary border-2 border-alt-black px-4 py-2 rounded-full font-bold text-sm">
            AURELON
          </div>
          <div className="border-2 border-alt-black px-4 py-2 rounded-full font-bold text-sm">
            SKIN SCIENCE
          </div>
        </div>

        <h1 className="text-8xl font-bold uppercase mt-6">
          OF SKIN RITUALS
        </h1>
        <h1 className="text-8xl font-bold uppercase">BY AURELON</h1>
      </div>

      <div className="border-t border-gray-400 mt-12 flex justify-between px-8">
        <div className="font-bold flex items-center border-r border-gray-400 w-96 h-50 relative">
          <CiDesktopMouse2 className="size-6 mr-2" />
          SCROLL TO BEGIN THE RITUAL
          <div className="absolute top-2 -right-7 bg-[#d0ceca] size-5" />
        </div>
        <div></div>
        <div className="border-l border-gray-400 w-96 h-50 relative">
          <div className="absolute top-2 left-2 bg-[#d0ceca] size-5" />
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center px-8 h-fit">
        <div></div>
        <div className="text-9xl font-bold">(A-01)</div>
      </div>
    </section>
  );
}
