"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import pmImage from "@/assets/images/pm.png";
import adminImg from "@/assets/images/admin.jpg";
import teamImg from "@/assets/images/member.jpg";

const items = [
  {
    label: "FOR ADMINS",
    description:
      "Enterprise-grade security, granular permissions, and full audit logs for complete control.",
    image: adminImg,
  },
  {
    label: "FOR PROJECT MANAGERS",
    description:
      "Automated reporting and workload balancing tools to keep projects on track and under budget.",
    image: pmImage,
  },
  {
    label: "FOR TEAM MEMBERS",
    description:
      'A distraction-free "My Work" view that focuses on current priorities and upcoming deadlines.',
    image: teamImg,
  },
];

export default function Solutions() {
  const [hovered, setHovered] = useState(0);
  const [direction, setDirection] = useState("right");
  const prevIndex = useRef(0);

  const handleHover = (index) => {
    setDirection(index < prevIndex.current ? "right" : "left");
    prevIndex.current = index;
    setHovered(index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold text-[#181d19] mb-10">
          Built for the whole team
        </h2>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={item.label}
              className="flex gap-4 group"
              onMouseEnter={() => handleHover(index)}
            >
              <div className="w-1 bg-[#bfc9c1] group-hover:bg-[#0f5238] transition-colors" />
              <div>
                <h4 className="text-sm font-bold text-[#0f5238] mb-1">
                  {item.label}
                </h4>
                <p className="text-[#404943] rounded-md -m-2 p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0f5238]/15">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="relative h-96 w-full rounded-2xl border border-[#bfc9c1] overflow-hidden shadow-lg bg-[#dce5df]/30">
  <div
    key={hovered}
    className={`absolute inset-0 ${
      direction === "right"
        ? "animate-slide-in-right"
        : "animate-slide-in-left"
    }`}
  >
    <Image
      src={items[hovered].image}
      alt={items[hovered].label}
      fill
       sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover"
    />
  </div>
</div>
    </section>
  );
}