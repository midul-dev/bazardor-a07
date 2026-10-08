"use client";

import { ICategory } from "@/types/categoryType";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinkClient = ({
  categories,
}: {
  categories: ICategory[];
}) => {
  const pathname = usePathname();

  return (
    <nav className="w-full border-y mt-2 border-slate-200 sm:mt-3 bg-white">
      <div className="">
        <div
          className="
            flex
            items-center
            gap-2
            overflow-x-auto
            py-2.5

            sm:gap-3
            sm:py-3

            md:py-2

            lg:justify-start

            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {categories.map((category) => {
            const href = `/category/${category.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={category.id}
                href={href}
                className={`
                  flex
                  shrink-0
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  px-2
                  py-1
                  text-xs
                  font-semibold
                  whitespace-nowrap
                  transition-all
                  duration-200

                  active:scale-95

                  sm:gap-2
                  sm:px-3
                  sm:py-1
                  sm:text-sm

                  
                  md:text-base

                  ${
                    isActive
                      ? "border-green-600 bg-green-600 text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700"
                  }
                `}
              >
                <span className="text-base sm:text-lg">
                  {category.icon}
                </span>

                <span>{category.nameBn}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavLinkClient;