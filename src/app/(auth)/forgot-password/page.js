import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#181d19] mb-1">Forgot password?</h1>
        <p className="text-sm text-[#404943]">
          No worries, we&apos;ll send you reset instructions via email.
        </p>
      </div>

      <form className="space-y-5">
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

        <button
          type="submit"
          className="w-full py-2.5 bg-[#0f5238] text-white text-sm font-semibold rounded-lg hover:bg-[#2d6a4f] transition active:scale-[0.98]"
        >
          Reset Password
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#404943]">
        <Link href="/login" className="font-medium text-[#0f5238] hover:underline">
          ← Back to Login
        </Link>
      </p>
    </div>
  );
}