import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Co-Work",
  description: "Collaborative Project Management Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-slate-50 text-gray-900 min-h-screen flex flex-col"
        style={{
          background:
            "linear-gradient(180deg, #EAF3FF 0%, #F5F9FF 50%, #FFFFFF 100%)",
        }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
