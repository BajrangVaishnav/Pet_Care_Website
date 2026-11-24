"use client";

import BackButton from "@/components/BackButton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { assetPath } from "@/lib/assetPath";
import { DEMO_ACCOUNT, signInLocalUser } from "@/lib/localAuth";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: DEMO_ACCOUNT.email,
      password: DEMO_ACCOUNT.password,
    },
  });

  async function onSubmit({ email, password }) {
    setStatusMessage("");

    try {
      await signInLocalUser(email, password);
      router.push("/dashboard");
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to sign in."
      );
    }
  }

  return (
    <main className="mx-2 my-6 sm:mx-4 sm:my-8 lg:mx-20 lg:my-10">
      <BackButton />
      <div className="grid grid-cols-1 gap-8 rounded-2xl px-4 py-6 shadow-2xl shadow-gray-800 sm:px-8 sm:py-10 lg:grid-cols-2 lg:gap-10 lg:px-20">
        <section className="p-2 sm:p-5">
          <h1 className="text-4xl font-bold text-[#6fc509] sm:text-5xl lg:text-6xl">
            Login
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Sign in with a demo account or one registered in this browser.
          </p>

          <p className="mt-5 text-sm text-gray-600">
            Demo credentials are prefilled. You can also enter an account
            registered in this browser.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="email" className="mb-1 block">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email address.",
                  },
                })}
                className="w-full rounded border border-gray-400 p-3 outline-none focus:border-green-600"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block">
                Password
              </label>
              <div className="flex items-center rounded border border-gray-400 p-2 focus-within:border-green-600">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required.",
                  })}
                  className="w-full p-1 outline-none"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="rounded p-1"
                >
                  {showPassword ? (
                    <MdVisibility aria-hidden="true" className="text-2xl" />
                  ) : (
                    <MdVisibilityOff aria-hidden="true" className="text-2xl" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            {statusMessage && (
              <p className="text-sm text-red-600" role="alert">
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 rounded-full bg-[#6fc509] px-10 py-3 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-5 max-w-md text-xs leading-5 text-gray-600">
            Demo only: sign-in data stays in this browser and does not protect
            website content. Do not use a real or reused password.
          </p>
        </section>

        <section className="flex flex-col justify-center gap-4 rounded-2xl bg-gray-50 p-5 sm:p-8">
          <h2 className="text-2xl font-bold">New to Pet Care?</h2>
          <p className="leading-7 text-gray-700">
            Create a local demo account to try the registration and sign-in
            flow. It will only be available in this browser.
          </p>
          <Link
            href="/register"
            className="mt-2 inline-flex min-h-12 w-fit items-center justify-center rounded-full border border-[#ff741b] px-8 py-3 font-semibold text-[#ff741b] hover:bg-orange-50"
          >
            Create account
          </Link>
          <Image
            src={assetPath("/images/loginDog.png")}
            alt=""
            width={200}
            height={200}
            className="mt-4 h-auto max-w-full self-end rounded-2xl"
          />
        </section>
      </div>
    </main>
  );
}
