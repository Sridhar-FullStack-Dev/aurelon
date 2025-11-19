import { dm_sans, playfair_display } from "@/public/fonts/fonts";
import { LiaAsteriskSolid } from "react-icons/lia";
import { Marquee } from "../ui/marquee";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className={`${playfair_display.className} `}>
      <Marquee className="[--duration:30s] bg-alt-primary text-tertiary h-20">
        {marqueeText.map((text, index) => (
          <div
            key={text.text + index}
            className="flex justify-start items-center gap-6 text-2xl -tracking-tight font-medium"
          >
            <p className="pl-6">{text.text}</p>
            <LiaAsteriskSolid className="size-8 text-alt-red" />
          </div>
        ))}
      </Marquee>

      <div className="bg-alt-secondary px-8 py-24 relative">
        <div className="flex justify-between items-center text-xl font-semibold">
          <h4 className="w-96 text-left">
            Aurelón captures what the skin whispers before the eyes notice it
          </h4>

          <h4 className="w-96 text-right">
            Where light becomes sensation, and sensation becomes form
          </h4>
        </div>

        <div className="absolute -top-[28%] left-1/2 -translate-x-[49%] -translate-y-1/2 bg-white w-[50vw] h-240 p-8">
          <Image
            src={
              "https://images.pexels.com/photos/31008103/pexels-photo-31008103.jpeg"
            }
            alt="Aurelón Skin Form"
            width={500}
            height={500}
            className="w-full h-160 object-cover"
          />

          <div className={`${dm_sans.className} font-bold text-4xl px-2 py-8`}>
            <h4>A QUIET STUDY</h4>

            <div className="mt-4 flex items-start justify-between">
              <h4>
                SKIN-LIGHT AESTHETICS <br /> BY AURELON
              </h4>

              <LiaAsteriskSolid className="size-32 text-alt-red" />
            </div>
          </div>
        </div>

        <div className="mt-50 flex flex-col justify-center items-center w-full">
          <Image
            src={"/wave.png"}
            alt="wave"
            width={512}
            height={512}
            className="w-72 h-auto object-contain opacity-30"
          />

          <div className="text-center text-3xl font-medium mt-4">
            In a world shaped by movement and stillness, <br />
            Aurelón studies the quiet space of skin. <br />
            <p className="opacity-50">The subtle tension of texture, light, and warmth.</p>
            <p className="opacity-30">designed to profondly humanize the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const marqueeText = [
  {
    text: "Aurelón Skin Form",
  },
  {
    text: "Light Ritual",
  },
  {
    text: "Light Studies",
  },
  {
    text: "Archive",
  },
  {
    text: "Texture",
  },
];
