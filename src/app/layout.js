
import "./globals.css";
export const metadata = {
  title: "Co-Work",
  description: "Collaborative Project Management Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}