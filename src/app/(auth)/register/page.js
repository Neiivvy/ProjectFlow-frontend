import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#181d19] mb-1">Create an account</h1>
        <p className="text-sm text-[#404943]">Sign up to get started.</p>
      </div>

      <form className="space-y-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium text-[#181d19]">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Rhaenyra Targaryen"
            className="w-full px-4 py-2.5 bg-[#ecefe9] border border-[#bfc9c1] rounded-lg text-sm text-[#181d19] placeholder:text-[#707973] focus:outline-none focus:border-[#0f5238] focus:ring-2 focus:ring-[#0f5238]/10 transition"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-[#181d19]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@gmail.com"
            className="w-full px-4 py-2.5 bg-[#ecefe9] border border-[#bfc9c1] rounded-lg text-sm text-[#181d19] placeholder:text-[#707973] focus:outline-none focus:border-[#0f5238] focus:ring-2 focus:ring-[#0f5238]/10 transition"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="password" className="block text-sm font-medium text-[#181d19]">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2.5 bg-[#ecefe9] border border-[#bfc9c1] rounded-lg text-sm text-[#181d19] placeholder:text-[#707973] focus:outline-none focus:border-[#0f5238] focus:ring-2 focus:ring-[#0f5238]/10 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-[#0f5238] text-white text-sm font-semibold rounded-lg hover:bg-[#2d6a4f] transition active:scale-[0.98]"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#404943]">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-[#0f5238] hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}