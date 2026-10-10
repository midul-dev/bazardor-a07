
"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("BazarDor error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl text-center">
        {/* Error icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-12 w-12 text-green-700"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.3 3.9 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
            />
          </svg>
        </div>

        {/* Error message */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
          BazarDor · Something went wrong
        </p>

        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          উফ! কিছু একটা সমস্যা হয়েছে
        </h1>

        <p className="mx-auto mb-8 max-w-lg text-base leading-7 text-gray-600">
          দুঃখিত, এই মুহূর্তে আপনার অনুরোধটি সম্পন্ন করা
          যাচ্ছে না। সাময়িক সমস্যা হতে পারে।
          অনুগ্রহ করে আবার চেষ্টা করুন।
        </p>

        {/* Action buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7v5h-5M4 17v-5h5m11-1a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3"
              />
            </svg>
            আবার চেষ্টা করুন
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          সমস্যা চলতে থাকলে কিছুক্ষণ পর আবার চেষ্টা করুন।
        </p>
      </div>
    </main>
  );
}
