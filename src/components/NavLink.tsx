import { ICategory } from "@/types/categoryType";
import Link from "next/link";

const NavLink = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories"
  );

  const categories: ICategory[] = await res.json();

  return (
    <nav className="w-full border-y border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex items-center gap-2 overflow-x-auto py-3
            sm:gap-3 sm:py-4
            lg:justify-center
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.id}
              className="
                flex shrink-0 items-center gap-2
                rounded-full border border-slate-200
                bg-white px-4 py-2
                text-sm font-medium text-slate-700
                transition-all duration-200
                hover:border-green-500
                hover:bg-green-50
                hover:text-green-700
                active:scale-95
                sm:px-5 sm:py-2.5
                sm:text-base
              "
            >
              <span className="text-lg sm:text-xl">
                {category.icon}
              </span>

              <span className="font-semibold">
                {category.nameBn}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavLink;