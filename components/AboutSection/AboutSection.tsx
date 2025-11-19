import { PiAsteriskSimpleBold } from "react-icons/pi";
import { Marquee } from "../ui/marquee";

export default function AboutSection() {
  return (
    <section>
      <Marquee className="[--duration:10s] bg-primary text-tertiary">
        {marqueeText.map((text, index) => (
          <div
            key={text.text + index}
            className="flex justify-start items-center gap-4 text-3xl!"
          >
            {text.text}
            <PiAsteriskSimpleBold className="size-6 text-primary-red!" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

const marqueeText = [
  {
    text: "Aurelon Skin form",
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
