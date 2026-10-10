const ProductDetailLoading = () => {
  return (
    <main className="min-h-screen w-full min-w-0 text-slate-900">
      <div className="px-4 pb-12 pt-6 sm:px-6 sm:pt-8">
        {/* Breadcrumb Skeleton */}
        <nav className="mb-6 flex items-center gap-2">
          <div className="h-4 w-10 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-3 animate-pulse rounded bg-slate-100" />
          <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-3 animate-pulse rounded bg-slate-100" />
          <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
        </nav>

        {/* Product Hero Skeleton */}
        <section className="flex animate-pulse flex-col gap-5 rounded-2xl border border-[#dfe8df] bg-white/80 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          {/* Product Information */}
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            {/* Product Icon */}
            <div className="h-16 w-16 shrink-0 rounded-2xl bg-slate-200 sm:h-[68px] sm:w-[68px]" />

            {/* Name, Unit & Price Change */}
            <div className="min-w-0 flex-1 space-y-3">
              <div className="h-7 w-40 max-w-full rounded-md bg-slate-200 sm:h-8 sm:w-52" />

              <div className="h-4 w-36 max-w-full rounded bg-slate-100" />

              <div className="h-4 w-52 max-w-full rounded bg-slate-100" />
            </div>
          </div>

          {/* Today's Price */}
          <div className="flex shrink-0 items-center justify-between gap-6 rounded-2xl bg-[#f0f5f0] px-5 py-4 sm:min-w-[135px] sm:flex-col sm:gap-3 sm:text-center">
            <div className="space-y-2">
              <div className="mx-auto h-4 w-20 rounded bg-slate-200" />

              <div className="mx-auto h-9 w-24 rounded-md bg-slate-200" />

              <div className="mx-auto h-3 w-24 rounded bg-slate-100" />
            </div>

            <div className="h-7 w-16 rounded-full bg-slate-200" />
          </div>
        </section>

        {/* Price Summary Skeleton */}
        <section className="mt-6 animate-pulse">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#dfe8df] bg-white p-4 sm:p-5"
              >
                <div className="h-4 w-28 rounded bg-slate-200" />

                <div className="mt-3 h-7 w-32 rounded-md bg-slate-200" />

                <div className="mt-3 h-4 w-24 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        </section>

        {/* Market Price Table Skeleton */}
        <section className="mt-6 animate-pulse">
          {/* Table Heading */}
          <div className="mb-3 h-6 w-48 rounded-md bg-slate-200" />

          <div className="overflow-hidden rounded-2xl border border-[#dfe8df]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-white">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <th
                        key={index}
                        className="px-4 py-3 sm:px-5"
                      >
                        <div className="h-4 w-16 rounded bg-slate-200" />
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {Array.from({ length: 5 }).map((_, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`border-t border-[#e4ebe4] ${
                        rowIndex % 2 === 1 ? "bg-[#f0f5f0]" : "bg-white"
                      }`}
                    >
                      {Array.from({ length: 5 }).map((_, colIndex) => (
                        <td
                          key={colIndex}
                          className="px-4 py-4 sm:px-5"
                        >
                          <div
                            className={`h-4 rounded bg-slate-200 ${
                              colIndex === 0
                                ? "w-24"
                                : colIndex === 1
                                  ? "w-16"
                                  : "ml-auto w-20"
                            }`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Related Category Link Skeleton */}
        <section className="mt-7 animate-pulse">
          <div className="h-5 w-40 rounded bg-slate-200" />
        </section>
      </div>
    </main>
  );
};

export default ProductDetailLoading;