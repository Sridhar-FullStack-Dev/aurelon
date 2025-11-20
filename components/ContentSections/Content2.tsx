import { playfair_display } from "@/public/fonts/fonts";

export default function Content2() {
  return (
    <section className="bg-alt-primary px-8 py-26 flex justify-between items-start w-full h-full">
      <div className="w-1/2 h-full flex flex-col justify-between items-start bg-red-600">
        <div className="relative h-25">
          <div className="bg-alt-secondary size-25 rounded-full absolute top-0 left-0 z-30" />
          <div className="bg-[#b4c450] size-25 rounded-full absolute top-0 left-14 z-20" />
          <div className="bg-[#637137] size-25 rounded-full absolute top-0 left-25 z-10" />
        </div>

        <div
          className={`${playfair_display.className} text-[#d7dfdf] font-medium text-2xl`}
        >
          Aurelon reveals <br />
          What skin holds <br />
          between shadow <br />
          and illumination
        </div>

        <div className="border border-alt-secondary w-64 h-20 rounded-full p-2">
          <div className="bg-alt-secondary w-1/2 h-full rounded-full"></div>
        </div>
      </div>

      <div className="w-1/2 text-right">
        <h1 className="text-alt-secondary text-9xl font-semibold">
          Creates Light
        </h1>
        <h1 className="text-[#e6e5da] text-9xl font-semibold">Contours</h1>
        <h1 className="text-[#b9bfb7] text-9xl font-semibold">Texture</h1>
        <h1 className="text-[#64716a] text-9xl font-semibold">Skin</h1>
        <h1 className="text-[#3e4945] text-9xl font-semibold">Light Motion</h1>
      </div>
    </section>
  );
}
