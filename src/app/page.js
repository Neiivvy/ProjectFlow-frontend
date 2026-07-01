import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-28">
        <Hero />
        <Features />
        <Solutions />
      </main>

      <Footer />
    </>
  );
}