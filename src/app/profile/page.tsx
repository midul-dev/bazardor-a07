
"use client";

import { useState } from "react";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Image from "next/image";


const ProfilePage = () => {
  const { data: session } = useSession();
  const [show, setShow] = useState(false)
  const user = session?.user;
  const firstLetter = user?.name?.charAt(0)?.toUpperCase() ?? "U";

  const [isUpdating, setIsUpdating] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleUpdateName = async (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formUser = Object.fromEntries(formData.entries()) as { name: string }


    if (!formUser) {
      toast.error("নাম খালি রাখা যাবে না!");
      return;
    }

    if (formUser?.name === user?.name) {
      toast.error("নামে কোনো পরিবর্তন করা হয়নি!");
      return;
    }
    setIsUpdating(true);

    try {
      const { error } = await updateUser({
        name: formUser.name,
      });

      if (error) {
        toast.error(error.message || "নাম আপডেট করা যায়নি!");
        return;
      }

      toast.success("নাম সফলভাবে আপডেট হয়েছে!");
    } catch (error) {
      console.error("Update name error:", error);
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    } finally {
      setIsUpdating(false);
    }
  };


  const handleSignOut = async () => {
    setIsSigningOut(true)
    const { error } = await signOut();
    toast.success('সফলভাবে সাইন আউট হয়েছে।')

    if (error) {
      toast.error(error?.message || "সাইন আউট করা যায়নি!");
      setIsSigningOut(false);
      return;
    }

  }

  const handleEditButton = ()=>{
    setShow(!show)
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
            {user?.image ? (
              <Image
                src={user?.image}
                alt={`${user?.name}'s profile`}
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
                {user?.name}
              </h2>

              <p className="mt-1 break-all text-sm text-gray-500 sm:text-base">
                {user?.email}
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

            {isSigningOut ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
          </button>
        </section>

        <div className="flex justify-center pb-5"><button onClick={handleEditButton} className="btn bg-green-600 rounded-xl text-white hover:bg-green-800">Edit Profile</button>
</div>
        {/* Update profile form */}
       { show && <section className="rounded-2xl border border-[#dfe8df] bg-white/80 p-4 shadow-sm sm:p-6">
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
        </section>}
      </div>
    </main>
  );
};

export default ProfilePage;
