import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { assetPath } from "@/lib/assetPath";

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
  { href: "/press-releases", label: "Press releases" },
];

const informationLinks = [
  { href: "/management", label: "Management" },
  { href: "/investors", label: "Investors" },
  { href: "/media", label: "Media" },
];

export default function Footer() {
  return (
    <footer className="mt-10 grid grid-cols-1 gap-4 py-6 text-white sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col items-start gap-5 rounded-2xl bg-[#333333] p-6 sm:col-span-2 lg:col-span-1">
        <Link href="/" aria-label="Pet Care home">
          <Image
            src={assetPath("/images/footLogo.png")}
            alt="Pet Care"
            width={100}
            height={100}
            className="h-auto w-[100px]"
          />
        </Link>
        <p>A demo website for exploring pet-care services and information.</p>
        <a
          href="https://github.com/BajrangVaishnav"
          aria-label="GitHub profile"
          title="Visit GitHub profile"
          className="group relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-[#3d3d3c] hover:text-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub aria-hidden="true" className="text-2xl" />
          <span
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-0 z-10 mb-2 hidden whitespace-nowrap rounded bg-gray-900 px-3 py-2 text-xs text-white group-hover:block group-focus-visible:block"
          >
            GitHub profile
          </span>
        </a>
      </div>

      <nav
        aria-label="Company"
        className="rounded-2xl bg-[#333333] p-6"
      >
        <h2 className="mb-4 text-xl font-bold">Company</h2>
        <ul className="grid gap-3">
          {companyLinks.map(({ href, label }) => (
            <li key={href}>
              <Link className="text-sm hover:text-lime-300" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        aria-label="Project information"
        className="rounded-2xl bg-[#333333] p-6"
      >
        <h2 className="mb-4 text-xl font-bold">Project information</h2>
        <ul className="grid gap-3">
          {informationLinks.map(({ href, label }) => (
            <li key={href}>
              <Link className="text-sm hover:text-lime-300" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="rounded-2xl bg-[#333333] p-6">
        <h2 className="mb-4 text-xl font-bold">Project</h2>
        <p className="text-sm leading-6">
          This is a front-end demonstration. Accounts, bookings, and store
          features are not connected to live services.
        </p>
      </div>
    </footer>
  );
}
