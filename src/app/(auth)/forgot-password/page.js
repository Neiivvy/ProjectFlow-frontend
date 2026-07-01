"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#181d19] mb-1">
          Forgot password?
        </h1>

        <p className="text-sm text-[#404943]">
          No worries, we&apos;ll send you reset instructions via email.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#181d19]"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="name@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
            className="w-full px-4 py-2.5 bg-[#ecefe9] border border-[#bfc9c1] rounded-lg text-sm"
          />

          {errors.email && (
            <p className="text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-[#0f5238] text-white text-sm font-semibold rounded-lg"
        >
          Reset Password
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#404943]">
        <Link
          href="/login"
          className="font-medium text-[#0f5238] hover:underline"
        >
          ← Back to Login
        </Link>
      </p>
    </div>
  );
}