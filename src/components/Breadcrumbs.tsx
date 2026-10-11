 
import { IProducts } from "@/types/productsType";
import Link from "next/link";

interface BreadcrumbsProps {
  singleProduct: IProducts;
}

export default function Breadcrumbs({
  singleProduct,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-600 sm:mb-8 sm:gap-3"
    >
      {/* Home */}
      <Link
        href="/"
        className="shrink-0 transition hover:text-green-700"
      >
        হোম
      </Link>

      {/* Category */}
      {singleProduct.categoryNameBn && (
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 18 6-6-6-6"
            />
          </svg>

          <Link
            href={`/category/${singleProduct.category}`}
            className="truncate transition hover:text-green-700"
          >
            {singleProduct.categoryNameBn}
          </Link>
        </div>
      )}

      {/* Current Product */}
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          className="h-4 w-4 shrink-0 text-slate-400"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 18 6-6-6-6"
          />
        </svg>

        <span
          aria-current="page"
          className="truncate font-medium text-slate-800"
        >
          {singleProduct.nameBn}
        </span>
      </div>
    </nav>
  );
}
