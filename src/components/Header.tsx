import Image from "next/image";
import logo from "@/assets/logo-icon.png";
import NavLink from "./NavLink";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full pt-4 sm:pt-5 sticky top-0 z-50 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

        {/* ================= Top Header ================= */}
        <div className="flex items-center justify-between gap-3">

          {/* Logo + Brand */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image src={logo} alt="Bazardor" width={50} height={50} priority className=" h-10 w-10 rounded-xl border border-green-500 bg-green-700 p-2 sm:h-12 sm:w-12 " />
            </Link>

            {/* Brand Info */}
            <div className="min-w-0">
              <Link
                href="/"
                className="
                  block truncate text-xl font-bold text-gray-900
                  transition-colors hover:text-green-700
                  sm:text-2xl
                "
              >
                বাজার দর
              </Link>

              <p className="truncate text-[10px] text-gray-500 sm:text-xs md:text-sm">
                {date}
              </p>
            </div>
          </div>

          {/* ================= Auth Buttons ================= */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">

            <Link href="/signin" className=" rounded-lg px-2.5 py-2 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-100 sm:px-4 sm:text-sm " >
              সাইন ইন
            </Link>

            <Link href="/signup" className=" rounded-lg bg-green-700 px-2.5 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-800 hover:shadow-md active:scale-95 sm:px-4 sm:py-2.5 sm:text-sm " >
              সাইন আপ
            </Link>

          </div>
        </div>

        {/* ================= Category Navigation ================= */}
        <NavLink />

      </div>
    </header>
  );
};

export default Header;