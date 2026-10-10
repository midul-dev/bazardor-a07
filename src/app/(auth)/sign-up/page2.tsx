
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(
      formData.get("confirmPassword") ?? "",
    );

    if (password.length < 8) {
      setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    if (password !== confirmPassword) {
      setError("দুটি পাসওয়ার্ড মিলছে না।");
      return;
    }

    setLoading(true);

    try {
      const { error: signUpError } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: "/",
      });

      if (signUpError) {
        setError(signUpError.message || "অ্যাকাউন্ট তৈরি করা যায়নি।");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignUp = async (provider: "google" | "github") => {
    setError("");
    setSocialLoading(provider);

    try {
      const { error: socialError } = await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });

      if (socialError) {
        setError(socialError.message || "সোশ্যাল সাইন আপ ব্যর্থ হয়েছে।");
        setSocialLoading("");
      }
    } catch {
      setError("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      setSocialLoading("");
    }
  };

  return (
    <main className="min-h-[calc(100vh-130px)] bg-[#f0f5f0] px-4 py-10 text-slate-900 sm:py-12">
<div>
  <div>

          {/* Social Signup */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => handleSocialSignUp("google")}
              disabled={loading || !!socialLoading}
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium transition hover:bg-slate-50 disabled:opacity-60"
            >
              <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.5 0 6.3 1.2 8.5 3.3l6.3-6.3C34.9 2.9 29.9.5 24 .5 14.8.5 6.8 5.8 2.9 13.5l7.4 5.7C12.1 13.1 17.6 9.5 24 9.5Z" />
                <path fill="#4285F4" d="M47 24.5c0-1.6-.2-3.2-.5-4.7H24v9h13c-.6 3-2.3 5.5-4.7 7.2l7.3 5.7C44.1 37.4 47 31.5 47 24.5Z" />
                <path fill="#FBBC05" d="M10.3 28.8a14.5 14.5 0 0 1 0-9.6l-7.4-5.7a23.5 23.5 0 0 0 0 21l7.4-5.7Z" />
                <path fill="#34A853" d="M24 47.5c6.3 0 11.6-2.1 15.5-5.8l-7.3-5.7c-2 1.4-4.6 2.3-8.2 2.3-6.4 0-11.9-3.6-13.7-9l-7.4 5.7C6.8 42.2 14.8 47.5 24 47.5Z" />
              </svg>

              {socialLoading === "google" ? "অপেক্ষা করুন..." : "Google দিয়ে চালিয়ে যান"}
            </button>

            <button
              type="button"
              onClick={() => handleSocialSignUp("github")}
              disabled={loading || !!socialLoading}
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium transition hover:bg-slate-50 disabled:opacity-60"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3.1 1.1a10.8 10.8 0 0 1 5.6 0C17 4.2 18 4.5 18 4.5c.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
              </svg>

              {socialLoading === "github" ? "অপেক্ষা করুন..." : "GitHub দিয়ে চালিয়ে যান"}
            </button>
          </div>

         
      </div>
    </main>
  );
};

export default SignUpPage;
