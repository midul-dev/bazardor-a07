const CategoryLoading = () => {
  return (
    <main className="w-full min-w-0 px-4 pt-4 sm:px-6 sm:pt-8">
      {/* Category Header Skeleton */}
      <section className="w-full animate-pulse rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm sm:rounded-2xl sm:px-6 sm:py-5 md:py-6">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          {/* Category Icon */}
          <div className="h-10 w-10 shrink-0 rounded-lg bg-slate-200 sm:h-11 sm:w-11 sm:rounded-xl md:h-12 md:w-12" />

          {/* Category Info */}
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-6 w-28 rounded-md bg-slate-200 sm:h-7 sm:w-36" />

            <div className="h-4 w-48 max-w-full rounded-md bg-slate-100 sm:w-64" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="pt-5 sm:pt-6">
        {/* Section Heading */}
        <div className="mb-4 sm:mb-5">
          <div className="h-5 w-44 animate-pulse rounded-md bg-slate-200" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-xl border border-slate-100 bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4"
            >
              {/* Product Top Section */}
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Product Icon */}
                <div className="h-10 w-10 shrink-0 rounded-lg bg-slate-200 sm:h-12 sm:w-12 sm:rounded-xl" />

                {/* Product Name & Unit */}
                <div className="min-w-0 flex-1 space-y-2 pt-1">
                  <div className="h-5 w-3/4 rounded-md bg-slate-200" />

                  <div className="h-4 w-20 rounded-md bg-slate-100" />
                </div>
              </div>

              {/* Product Price & Change Badge */}
              <div className="mt-4 flex items-end justify-between gap-2 sm:mt-5">
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-4 w-20 rounded-md bg-slate-100" />

                  <div className="h-6 w-28 max-w-full rounded-md bg-slate-200" />
                </div>

                {/* Price Change Badge */}
                <div className="h-7 w-16 shrink-0 rounded-full bg-slate-100 sm:h-8 sm:w-20" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryLoading;