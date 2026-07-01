// app/member/page.js
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function MemberPage() {
  return (
    <div className="flex min-h-screen bg-[#f7f6f6]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-[#181d19]">
            Welcome to User Dashboard
          </h1>
        </main>
      </div>
    </div>
  );
}