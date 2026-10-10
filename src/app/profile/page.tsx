
"use client";

import { useState } from "react";
import { authClient, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

//   const [name, setName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
//   const [isSigningOut, setIsSigningOut] = useState(false);

  const user = session?.user;

  const firstLetter =
    Array.from(user?.name?.trim() || "")[0]?.toUpperCase() || "U";

  const handleUpdateName = async (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // const updatedName = name.trim();
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())
    

    

    if (user.name === user?.name) {
      toast.error("নামে কোনো পরিবর্তন করা হয়নি!");
      return;
    }

    setIsUpdating(true);

    try {
      const { error } = await authClient.updateUser({
        name: user?.name,
      });

      if (error) {
        toast.error(error.message || "নাম আপডেট করা যায়নি!");
        return;
      }

      toast.success("নাম সফলভাবে আপডেট হয়েছে!");
    //   setName("");
    } catch (error) {
      console.error("Update name error:", error);
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    } finally {
      setIsUpdating(false);
    }
  };

  
    const handleSignOut = async () => {
        await signOut();
        toast.success('সফলভাবে সাইন আউট হয়েছে।')
       
    }



  if (isPending) {
    return (
      <main className="min-h-[calc(100dvh-80px)] bg-[#f0f5f0] px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-5xl animate-pulse space-y-6">
          <div className="h-10 w-56 rounded-lg bg-gray-200" />
          <div className="h-24 rounded-2xl bg-white" />
          <div className="h-48 rounded-2xl bg-white" />
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-[calc(100dvh-80px)] items-center justify-center bg-[#f0f5f0] px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-[#dfe8df] bg-white p-6 text-center shadow-sm">
          <h1 className="text-xl font-bold text-gray-900">
            আপনার অ্যাকাউন্টে সাইন ইন করুন
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            প্রোফাইল দেখতে হলে প্রথমে সাইন ইন করতে হবে।
          </p>

          <a
            href="/sign-in"
            className="btn mt-5 border-0 bg-green-700 text-white hover:bg-green-800"
          >
            সাইন ইন করুন
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100dvh-80px)] bg-[#f0f5f0] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        {/* Page heading */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </header>

        {/* User information card */}
        <section className="mb-6 flex flex-col gap-4 rounded-2xl border border-[#dfe8df] bg-white/80 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex min-w-0 items-center gap-4">
            {user.image ? (
              <Image
                src={user.image}
                alt={`${user.name}'s profile`}
                height={50}
                width={50}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-full bg-green-700 text-2xl font-semibold text-white sm:w-20">
                {firstLetter}
              </div>
            )}

            <div className="min-w-0">
              <h2 className="truncate text-lg font-semibold text-gray-950 sm:text-xl">
                {user.name}
              </h2>

              <p className="mt-1 break-all text-sm text-gray-500 sm:text-base">
                {user.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            // disabled={isSigningOut}
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60 sm:self-center"
          >
            <span aria-hidden="true">↪</span>
            সাইন
            {/* {isSigningOut ? "সাইন আউট হচ্ছে..." : "সাইন আউট"} */}
          </button>
        </section>

        {/* Update profile form */}
        <section className="rounded-2xl border border-[#dfe8df] bg-white/80 p-4 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold text-gray-950 sm:text-2xl">
            নাম হালনাগাদ করুন
          </h2>

          <form onSubmit={handleUpdateName} className="mt-4 space-y-3">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-base font-medium text-gray-900"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                
                required
                maxLength={100}
                disabled={isUpdating}
                className="input h-11 w-full border border-gray-300 bg-transparent text-gray-900 outline-none focus:border-green-700 focus:outline-2 focus:outline-green-700/20"
              />
            </div>

            <button
              type="submit"
            //   disabled={isUpdating || !name.trim() || name.trim() === user.name}
              className="btn min-h-10 border-0 bg-green-700 px-4 text-sm font-semibold text-white shadow-sm hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isUpdating ? "আপডেট হচ্ছে..." : "নাম হালনাগাদ করুন"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;
