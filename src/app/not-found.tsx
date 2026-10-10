
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-[#f0f5f0] px-4 py-12">
            <div className="w-full max-w-xl text-center">
                {/* 404 Illustration */}
                <div className="relative mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-green-100">
                    <span className="text-6xl font-extrabold tracking-tight text-green-700">
                        404
                    </span>

                    <div className="absolute -right-1 top-3 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#f0f5f0] bg-green-700 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16 16 4 4"
                            />
                        </svg>
                    </div>
                </div>

                {/* Text */}
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                    BazarDor · Page Not Found
                </p>

                <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
                </h1>

                <p className="mx-auto mb-8 max-w-md text-base leading-7 text-gray-600">
                    আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
                    লিংকটি ভুল অথবা পেজটি আর উপলব্ধ নেই।
                    চলুন, আবার বাজারদরের হোমপেজ থেকে শুরু করি।
                </p>

                {/* Buttons */}
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"
                            />
                        </svg>
                        হোম পেজে ফিরে যান
                    </Link>


                </div>

                {/* Footer Note */}
                <p className="mt-8 text-sm text-gray-500">
                    BazarDor — আপনার নিত্যপ্রয়োজনীয় পণ্যের বাজারদর
                </p>
            </div>
        </main>
    );
}