import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <main className="pt-28">
        <Hero />
        <Features />
        <Solutions />
      </main>

    </>
  );
}
