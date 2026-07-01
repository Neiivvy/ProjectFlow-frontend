import Image from "next/image";
import Homepage from "@/assets/images/Homepage.png";
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-8 pb-24 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <h1 className="text-5xl font-bold text-[#0f5238] leading-tight">
          Collaborative Project Management Hub
        </h1>

        <p className="mt-6 text-lg text-[#404943] max-w-lg">
          Manage projects, organize tasks, collaborate with your team, monitor
          progress, and improve productivity through one centralized platform.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-[#0f5238] text-white px-6 py-3 rounded-lg hover:bg-[#2d6a4f] transition">
            Get Started
          </button>

          <button className="border border-[#0f5238] text-[#0f5238] px-6 py-3 rounded-lg hover:bg-[#ecefe9] transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-[#bfc9c1] overflow-hidden shadow-2xl bg-white animate-float">
        <Image
          src={Homepage}
          alt="Project management dashboard preview"
            loading="eager"
          className="w-full h-auto object-cover"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
}
