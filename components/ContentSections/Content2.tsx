import { playfair_display } from "@/public/fonts/fonts";
import Image from "next/image";

export default function Content2() {
  return (
    <section className="bg-alt-primary py-26 w-full h-full">
      <div className="px-8 flex justify-between items-start">
        <div className="w-1/2 h-full flex flex-col space-y-42">
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

          <div>
            <div className="border border-alt-secondary w-64 h-20 rounded-full p-2">
              <div className="bg-alt-secondary w-1/2 h-full rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="w-1/2 text-right">
          <h1 className="text-alt-secondary text-9xl font-semibold">
            Creates Light
          </h1>
          <h1 className="text-[#e6e5da] text-9xl font-semibold">Contours</h1>
          <h1 className="text-[#b9bfb7] text-9xl font-semibold">Texture</h1>
          <h1 className="text-[#64716a] text-9xl font-semibold">Skin</h1>
          <h1 className="text-[#3e4945] text-9xl font-semibold">
            Light Motion
          </h1>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-[25%] h-64 border-b border-r border-gray-400"></div>
        <div className="w-[50%] h-64 border-b border-r border-gray-400 relative">
          <div className="absolute -top-64 left-[20%] z-20">
            <Image
              src={
                "https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg"
              }
              alt="Light Motion"
              width={512}
              height={512}
              className="w-160 h-96 object-cover"
            />
          </div>

          <div className="absolute -top-50 left-[10%] z-10">
            <Image
              src={
                "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
              }
              alt="Light Motion"
              width={512}
              height={512}
              className="w-160 h-96 object-cover"
            />
          </div>
        </div>
        <div className="w-[25%] h-64 border-b border-gray-400"></div>
      </div>
    </section>
  );
}
