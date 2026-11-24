"use client";

import BackButton from "@/components/BackButton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { assetPath } from "@/lib/assetPath";
import { registerLocalUser } from "@/lib/localAuth";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit({ name, email, password }) {
    setStatusMessage("");

    try {
      await registerLocalUser({ name, email, password });
      router.push("/dashboard");
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to create account."
      );
    }
  }

  return (
    <main className="mx-2 my-6 sm:mx-4 sm:my-8 lg:mx-20 lg:my-10">
      <BackButton destinationHref="/login" />
      <div className="grid grid-cols-1 gap-8 rounded-2xl border px-4 py-6 shadow-2xl shadow-gray-800 sm:px-8 sm:py-10 lg:grid-cols-2 lg:gap-10 lg:px-20">
        <section className="flex flex-col">
          <h1 className="flex flex-col gap-1">
            <span className="text-4xl text-[#6fc509] sm:text-5xl lg:text-6xl">
              Welcome to
            </span>
            <span className="text-4xl text-[#ff741b] sm:text-5xl lg:text-6xl">
              Pet Care
            </span>
            <span className="text-4xl text-[#6fc509] sm:text-5xl lg:text-6xl">
              Solutions
            </span>
          </h1>
          <div className="mt-8 flex w-fit flex-col gap-4">
            <span className="text-sm">Already have an account?</span>
            <Link
              href="/login"
              className="rounded-full border border-[#ff741b] px-5 py-2 text-center text-[#ff741b] hover:bg-orange-50"
            >
              Login
            </Link>
          </div>
          <Image
            src={assetPath("/images/registerDog.png")}
            width={300}
            height={300}
            alt=""
            className="mt-6 h-auto max-w-full self-start"
          />
        </section>

        <section>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-2 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="name" className="mb-1 block">
                Name
              </label>
              <input
                id="name"
                autoComplete="name"
                {...register("name", {
                  required: "Name is required.",
                  maxLength: {
                    value: 80,
                    message: "Name must be 80 characters or fewer.",
                  },
                })}
                className="w-full rounded border border-gray-400 p-3 outline-none focus:border-green-600"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                  autoComplete="new-password"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters.",
                    },
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

            <div>
              <label htmlFor="confirm-password" className="mb-1 block">
                Confirm password
              </label>
              <input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                {...register("confirmPassword", {
                  required: "Please confirm your password.",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match.",
                })}
                className="w-full rounded border border-gray-400 p-3 outline-none focus:border-green-600"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.confirmPassword.message}
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
              className="rounded-full bg-[#6fc509] px-10 py-3 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="mt-5 max-w-md text-xs leading-5 text-gray-600">
            Demo only: this account is saved in this browser, not on a server.
            It will not be available on another browser or device.
          </p>
        </section>
      </div>
    </main>
  );
}
