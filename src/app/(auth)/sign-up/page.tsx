
"use client";

import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const user = Object.fromEntries(
        formData.entries()
      ) as {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
      };

      if (user.password !== user.confirmPassword) {
        toast.error("পাসওয়ার্ড দুটি মিলছে না!");
        return;
      }

      const { data, error } = await signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(
          error.message || "অ্যাকাউন্ট তৈরি করা যায়নি!"
        );
        console.error("Signup error:", error);
        return;
      }

      if (data) {
        toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে!");
        redirect("/");
      }
    } catch (err) {
      console.error("Unexpected signup error:", err);
      toast.error("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন!");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin =async (provider : "google" | "github")=>{
      const data = await signIn.social({
      provider,
    })
  }

  return (
    <main className="flex min-h-[calc(100dvh-80px)] w-full items-start justify-center px-4 py-8 sm:px-6 sm:py-10 lg:items-center lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-6 text-center sm:mb-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-700 text-2xl sm:h-14 sm:w-14">
            🛒
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600 sm:text-base">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#dfe8df] bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6 md:p-8">
          <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-800"
              >
                নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                autoComplete="name"
                required
                disabled={loading}
                className="w-full min-w-0 rounded-xl border border-[#cfd6cf] bg-white px-3 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-60 sm:px-4"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-800"
              >
                ইমেইল
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                disabled={loading}
                className="w-full min-w-0 rounded-xl border border-[#cfd6cf] bg-white px-3 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-60 sm:px-4"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-slate-800"
              >
                পাসওয়ার্ড
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                autoComplete="new-password"
                minLength={8}
                required
                disabled={loading}
                className="w-full min-w-0 rounded-xl border border-[#cfd6cf] bg-white px-3 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-60 sm:px-4"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-medium text-slate-800"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="আবার পাসওয়ার্ড লিখুন"
                autoComplete="new-password"
                minLength={8}
                required
                disabled={loading}
                className="w-full min-w-0 rounded-xl border border-[#cfd6cf] bg-white px-3 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-60 sm:px-4"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:py-3.5 sm:text-base"
            >
              {loading && (
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  aria-hidden="true"
                />
              )}
              {loading
                ? "অ্যাকাউন্ট তৈরি হচ্ছে..."
                : "অ্যাকাউন্ট তৈরি করুন"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 sm:my-6 sm:gap-4">
            <div className="h-px flex-1 bg-[#dfe8df]" />
            <span className="shrink-0 text-xs text-slate-500 sm:text-sm">
              অথবা
            </span>
            <div className="h-px flex-1 bg-[#dfe8df]" />
          </div>

          {/* Social Login  */}
          <div className="flex gap-3 justify-center pb-4">
          {/* google  */}
    <button
              type="button"
              onClick={()=>handleSocialLogin("google")}
            //   disabled={loading || !!socialLoading}
              className="flex btn-xs items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium transition hover:bg-slate-50 disabled:opacity-60"
            >
              <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.5 0 6.3 1.2 8.5 3.3l6.3-6.3C34.9 2.9 29.9.5 24 .5 14.8.5 6.8 5.8 2.9 13.5l7.4 5.7C12.1 13.1 17.6 9.5 24 9.5Z" />
                <path fill="#4285F4" d="M47 24.5c0-1.6-.2-3.2-.5-4.7H24v9h13c-.6 3-2.3 5.5-4.7 7.2l7.3 5.7C44.1 37.4 47 31.5 47 24.5Z" />
                <path fill="#FBBC05" d="M10.3 28.8a14.5 14.5 0 0 1 0-9.6l-7.4-5.7a23.5 23.5 0 0 0 0 21l7.4-5.7Z" />
                <path fill="#34A853" d="M24 47.5c6.3 0 11.6-2.1 15.5-5.8l-7.3-5.7c-2 1.4-4.6 2.3-8.2 2.3-6.4 0-11.9-3.6-13.7-9l-7.4 5.7C6.8 42.2 14.8 47.5 24 47.5Z" />
              </svg>
Google
              {/* {socialLoading === "google"
                ? "অপেক্ষা করুন..."
                : "Google দিয়ে চালিয়ে যান"} */}
            </button>
          {/* GITHUB  */}
          <button
              type="button"
               onClick={()=>handleSocialLogin("github")}
            //   disabled={loading || !!socialLoading}
              className="flex  items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium transition hover:bg-slate-50 disabled:opacity-60"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3.1 1.1a10.8 10.8 0 0 1 5.6 0C17 4.2 18 4.5 18 4.5c.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
GitHub
              {/* {socialLoading === "github"
                ? "অপেক্ষা করুন..."
                : "GitHub দিয়ে চালিয়ে যান"} */}
            </button>
</div>

          <p className="text-center text-sm leading-6 text-slate-600">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-green-700 underline-offset-4 hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        <div className="mt-5 text-center sm:mt-6">
          <Link
            href="/"
            className="inline-flex min-h-10 items-center justify-center rounded-lg px-3 text-sm text-slate-500 transition hover:text-green-700 hover:underline"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
