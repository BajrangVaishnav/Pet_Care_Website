"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { assetPath } from "@/lib/assetPath";
import { getLocalSession, signOutLocalUser } from "@/lib/localAuth";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/drprofile", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authMessage, setAuthMessage] = useState("");

  useEffect(() => {
    try {
      setUser(getLocalSession());
    } catch (error) {
      setAuthMessage(
        error instanceof Error ? error.message : "Unable to read saved sign-in."
      );
    }
  }, []);

  function signOut() {
    try {
      signOutLocalUser();
      setUser(null);
      setIsMenuOpen(false);
      setAuthMessage("");
    } catch (error) {
      setAuthMessage(
        error instanceof Error ? error.message : "Unable to sign out."
      );
    }
  }

  return (
    <header className="relative z-20 rounded-lg border-b border-gray-200 bg-white px-4 py-3 text-gray-800 shadow-sm sm:px-6 lg:mt-4">
      <div className="flex min-h-20 items-center justify-between gap-4">
        <Link href="/" aria-label="Pet Care home" onClick={() => setIsMenuOpen(false)}>
          <Image
            src={assetPath("/images/logo.png")}
            alt="Pet Care"
            width={88}
            height={88}
            className="h-auto w-[88px]"
            priority
          />
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-2xl lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <CgMenuRight aria-hidden="true" />
        </button>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border bg-white p-4 shadow-lg lg:static lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navigationLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded px-3 py-2 hover:bg-gray-100 lg:hover:bg-white/50"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="rounded px-3 py-2 hover:bg-gray-100 lg:hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                My account
              </Link>
              <button
                type="button"
                className="rounded px-3 py-2 text-left hover:bg-gray-100 lg:hover:bg-white/50"
                onClick={signOut}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded px-3 py-2 hover:bg-gray-100 lg:hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded px-3 py-2 hover:bg-gray-100 lg:hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </nav>

        {user ? (
          <div className="hidden items-center gap-3 lg:flex">
            <span className="max-w-32 truncate text-sm">Hi, {user.name}</span>
            <Link
              href="/dashboard"
              className="rounded-full bg-yellow-300 px-4 py-3 text-center text-sm font-medium"
            >
              My account
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="rounded-full border border-gray-500 px-4 py-3 text-sm"
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="hidden rounded-full bg-yellow-300 px-5 py-3 text-center text-sm font-medium lg:block"
          >
            Get Started
          </Link>
        )}
      </div>
      {authMessage && (
        <p className="mt-2 text-sm text-red-700" role="alert">
          {authMessage}
        </p>
      )}
    </header>
  );
}
