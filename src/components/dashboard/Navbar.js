
"use client";

export default function Navbar() {
  return (
    <header className="w-full h-16 sticky top-0 z-40 bg-white border-b border-[#bfc9c1] px-6 flex justify-between items-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search tasks, projects..."
          className="w-full pl-4 pr-4 py-2 bg-white border border-[#bfc9c1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f5238]/20 focus:border-[#0f5238] transition-all"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="hover:bg-[#ecefe9] rounded-full p-2 transition-all">
          Notifications
        </button>
        <div className="h-8 w-px bg-[#bfc9c1] mx-1" />
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-[#181d19]">Sylvia</p>
            <p className="text-xs text-[#404943]">Member</p>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#95d4b3] text-[#0f5238] font-bold">
            SY
          </span>
        </div>
      </div>
    </header>
  );
}