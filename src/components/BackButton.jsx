"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ fallbackHref = "/", destinationHref }) {
  const router = useRouter();

  function goBack() {
    if (destinationHref) {
      router.push(destinationHref);
      return;
    }

    const referrer = document.referrer;
    const hasSameOriginReferrer =
      referrer && new URL(referrer).origin === window.location.origin;

    if (hasSameOriginReferrer) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  }

  return (
    <button
      type="button"
      onClick={goBack}
      className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-300 px-5 py-2 font-medium text-gray-800 hover:bg-gray-100"
    >
      <span aria-hidden="true">←</span>
      Back
    </button>
  );
}
