const SkeletonBox = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div
      className={`animate-pulse rounded bg-slate-200 ${className}`}
    />
  );
};

/* =========================================================
   Product Card Skeleton
========================================================= */

const ProductCardSkeleton = () => {
  return (
    <div
      className="
        w-full
        rounded-xl
        border border-slate-100
        bg-white
        p-3
        shadow-sm

        sm:rounded-2xl
        sm:p-4
      "
    >
      {/* Top Section */}
      <div className="flex items-start gap-3 sm:gap-4">

        {/* Product Icon */}
        <SkeletonBox
          className="
            h-10 w-10 shrink-0 rounded-lg
            sm:h-12 sm:w-12 sm:rounded-xl
          "
        />

        {/* Product Info */}
        <div className="min-w-0 flex-1 space-y-2">
          <SkeletonBox
            className="h-4 w-24 sm:h-5 sm:w-28"
          />

          <SkeletonBox
            className="h-3 w-16 bg-slate-100 sm:w-20"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="
          mt-4
          flex items-end justify-between gap-2
          sm:mt-5
        "
      >
        {/* Price */}
        <div className="space-y-2">
          <SkeletonBox
            className="h-3 w-16 bg-slate-100 sm:w-20"
          />

          <SkeletonBox
            className="
              h-5 w-20
              sm:h-6 sm:w-24
            "
          />
        </div>

        {/* Change Badge */}
        <SkeletonBox
          className="
            h-6 w-14 rounded-full
            sm:h-7 sm:w-16
          "
        />
      </div>
    </div>
  );
};

/* =========================================================
   Product Grid Skeleton
========================================================= */

const ProductGridSkeleton = ({
  count,
}: {
  count: number;
}) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3

        sm:grid-cols-2
        sm:gap-4

        lg:grid-cols-3
        lg:gap-5
      "
    >
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

/* =========================================================
   Hero Skeleton
========================================================= */

const HeroSkeleton = () => {
  return (
    <section
      className="
        w-full
        px-4 py-4

        sm:px-6 sm:py-6

        lg:px-8
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        <div
          className="
            overflow-hidden
            rounded-2xl
            border border-gray-200
            bg-white
            shadow-sm

            sm:rounded-3xl
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-center

              md:grid-cols-2
            "
          >

            {/* ================= LEFT CONTENT ================= */}

            <div
              className="
                px-5 py-8

                sm:px-8 sm:py-10

                md:px-10 md:py-12

                lg:px-14 lg:py-16
              "
            >

              {/* Date */}
              <SkeletonBox
                className="
                  h-6 w-32 rounded-full
                  sm:w-40
                "
              />

              {/* Heading */}
              <div
                className="
                  mt-5
                  space-y-2

                  sm:space-y-3
                "
              >
                <SkeletonBox
                  className="
                    h-8 w-full max-w-md

                    sm:h-10

                    lg:h-14
                  "
                />

                <SkeletonBox
                  className="
                    h-8 w-4/5 max-w-sm

                    sm:h-10

                    lg:h-14
                  "
                />
              </div>

              {/* Description */}
              <div
                className="
                  mt-5
                  max-w-xl
                  space-y-2
                "
              >
                <SkeletonBox
                  className="
                    h-3 w-full
                    bg-slate-100

                    sm:h-4
                  "
                />

                <SkeletonBox
                  className="
                    h-3 w-11/12
                    bg-slate-100

                    sm:h-4
                  "
                />

                <SkeletonBox
                  className="
                    h-3 w-3/4
                    bg-slate-100

                    sm:h-4
                  "
                />
              </div>

              {/* CTA */}
              <div
                className="
                  mt-6
                  flex justify-center

                  sm:mt-7

                  md:justify-start
                "
              >
                <SkeletonBox
                  className="
                    h-10 w-28 rounded-lg

                    sm:h-12 sm:w-32
                  "
                />
              </div>

            </div>

            {/* ================= RIGHT IMAGE ================= */}

            <div
              className="
                flex
                items-center
                justify-center

                px-5
                pb-8

                sm:px-8
                sm:pb-10

                md:px-6
                md:py-10

                lg:px-10
              "
            >
              <SkeletonBox
                className="
                  h-[200px]
                  w-[200px]
                  rounded-2xl

                  sm:h-[280px]
                  sm:w-[280px]

                  md:h-[300px]
                  md:w-[300px]

                  lg:h-[360px]
                  lg:w-[360px]

                  xl:h-[420px]
                  xl:w-[420px]
                "
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   Section Heading Skeleton
========================================================= */

const SectionHeadingSkeleton = ({
  width = "w-36",
}: {
  width?: string;
}) => {
  return (
    <div
      className="
        mb-4
        flex
        items-center
        gap-2

        sm:mb-5
      "
    >
      {/* Arrow */}
      <SkeletonBox
        className="
          h-5 w-5

          sm:h-6 sm:w-6
        "
      />

      {/* Title */}
      <SkeletonBox
        className={`
          h-6
          rounded

          sm:h-7

          ${width}
        `}
      />
    </div>
  );
};

/* =========================================================
   Price Section Skeleton
========================================================= */

const PriceSectionSkeleton = () => {
  return (
    <section
      className="
        w-full
        px-4 pt-5

        sm:px-6 sm:pt-6

        lg:px-8
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Section Heading */}
        <SectionHeadingSkeleton width="w-36 sm:w-40" />

        {/* Products */}
        <ProductGridSkeleton count={6} />

      </div>
    </section>
  );
};

/* =========================================================
   All Products Skeleton
========================================================= */

const AllProductsSkeleton = () => {
  return (
    <section
      className="
        w-full
        px-4 pt-6

        sm:px-6 sm:pt-7

        lg:px-8
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div
          className="
            mb-5
            space-y-2

            sm:mb-6
          "
        >
          <SkeletonBox
            className="
              h-6 w-24

              sm:h-7 sm:w-28
            "
          />

          <SkeletonBox
            className="
              h-4 w-48
              bg-slate-100

              sm:w-56
            "
          />
        </div>

        {/* Products */}
        <ProductGridSkeleton count={18} />

      </div>
    </section>
  );
};

/* =========================================================
   Main Loading Page
========================================================= */

const Loading = () => {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Skeleton */}
      <HeroSkeleton />

      {/* Price Increase Skeleton */}
      <PriceSectionSkeleton />

      {/* Price Decrease Skeleton */}
      <PriceSectionSkeleton />

      {/* All Products Skeleton */}
      <AllProductsSkeleton />

    </main>
  );
};

export default Loading;