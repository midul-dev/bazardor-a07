'use client'
import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import toast from 'react-hot-toast';


const AuthUser = () => {
  const { data: session } = useSession()
  const user = session?.user

  const handleSignOut =async () => {
    await signOut();
    toast.success('সফলভাবে সাইন আউট হয়েছে।')
  }
  return (
    <div>
{
  user ? <div>
    <button className='btn ' onClick={handleSignOut}>Sign Out</button>
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