'use client'
import { signOut, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';


const AuthUser = () => {
  const { data: session } = useSession()
  const user = session?.user

  const handleSignOut = async () => {
    await signOut();
    toast.success('সফলভাবে সাইন আউট হয়েছে।')
  }
  return (
    <div>
      {
        user ? <div>
          {/* dropdown profile  */}

          <div className="dropdown dropdown-end">
            {/* Dropdown trigger */}
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 rounded-full px-2 py-1.5 transition hover:bg-gray-100"
            >
              {user.image ? (
                <Image
                  src={user.image}
                  alt={`${user.name}'s profile`}
                  height={40}
                  width={40}
                  className="h-9 w-9 rounded-full object-cover"
                />) : (<span className="flex h-8 min-w-9 items-center justify-center rounded-full bg-green-700 px-2 text-sm font-bold text-white">
                  {user.name.trim().slice(0, 1)}
                </span>)}

              <span className="hidden text-sm font-semibold text-gray-800 sm:block">
                {user.name}
              </span>

              <span className="text-xs text-gray-500">▾</span>
            </div>

            {/* Dropdown content */}
            <ul
              tabIndex={0}
              className="dropdown-content menu z-50 mt-2 w-64 max-w-[calc(100vw-2rem)] gap-1 rounded-2xl border border-[#dfe8df] bg-white p-2 text-gray-800 shadow-lg"
            >
              {/* User information */}
              <li className="pointer-events-none mb-1 border-b border-gray-100 pb-2">
                <div className="flex flex-col items-start gap-1 px-3 py-2">
                  <span className="w-full truncate text-sm font-semibold text-gray-900">
                    {user.name}
                  </span>
                  <span className="w-full truncate text-xs text-gray-500">
                    {user.email}
                  </span>
                </div>
              </li>

              {/* Profile link */}
              <li>
                <Link
                  href="/profile"
                  className="rounded-xl py-2.5 text-sm hover:bg-green-50"
                >
                  <span>👤</span>
                  আমার প্রোফাইল
                </Link>
              </li>

              {/* Sign out */}
              <li>
                <button onClick={handleSignOut}
                  type="button"
                  className="rounded-xl py-2.5 text-sm text-red-600 hover:bg-red-50"
                >
                  <span>↪</span>
                  সাইন আউট
                </button>
              </li>
            </ul>
          </div>

        </div> : <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">

          <Link href="/sign-in" className=" rounded-lg px-2.5 py-2 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-100 sm:px-4 sm:text-sm " >
            সাইন ইন
          </Link>

          <Link href="/sign-up" className=" rounded-lg bg-green-700 px-2.5 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-800 hover:shadow-md active:scale-95 sm:px-4 sm:py-2.5 sm:text-sm " >
            সাইন আপ
          </Link>

        </div>
      }
    </div>



  );
};

export default AuthUser;