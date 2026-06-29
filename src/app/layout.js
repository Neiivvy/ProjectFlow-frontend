import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "PMS",
    template: "%s || PMS",
  },
  description: "This is Project Management System.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-linear-to-r from-violet-100 via-violet-50  to-violet-100">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
