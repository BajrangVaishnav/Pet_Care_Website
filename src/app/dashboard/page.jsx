"use client";

import BackButton from "@/components/BackButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getLocalSession, signOutLocalUser } from "@/lib/localAuth";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    try {
      const session = getLocalSession();
      if (!session) {
        router.replace("/login");
        return;
      }

      setUser(session);
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to read saved sign-in."
      );
    }
  }, [router]);

  function signOut() {
    try {
      signOutLocalUser();
      router.replace("/login");
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to sign out."
      );
    }
  }

  if (statusMessage) {
    return (
      <main className="mx-auto my-8 max-w-3xl px-4">
        <BackButton />
        <p className="rounded-xl bg-red-50 p-4 text-red-700" role="alert">
          {statusMessage}
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="p-8 text-center" aria-live="polite">
        Checking local sign-in...
      </main>
    );
  }

  return (
    <main className="mx-auto my-8 max-w-4xl rounded-3xl bg-[#f7f8f4] px-5 py-10 sm:px-10 sm:py-14">
      <BackButton />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
        Local demo account
      </p>
      <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-5xl">
        Welcome, {user.name}
      </h1>
      <p className="mt-4 text-gray-700">{user.email}</p>
      <p className="mt-6 max-w-2xl leading-7 text-gray-700">
        You are signed in on this browser. This static demo does not provide
        secure access control, account recovery, or cross-device account
        storage.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/appointment"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
        >
          View appointments
        </Link>
        <button
          type="button"
          onClick={signOut}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-400 px-6 py-3 font-semibold text-gray-800 hover:bg-white"
        >
          Sign out
        </button>
      </div>
    </main>
  );
}
