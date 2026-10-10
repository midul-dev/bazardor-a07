import ProductCard from "@/components/ProductCard";
import formatNumber from "@/lib/functions/formatNumber";
import { ICategory } from "@/types/categoryType";
import { IProducts } from "@/types/productsType";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `${process.env.SINGLE_CATEGORY_ID_API}${categoryId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  const singleCategory: IProducts[] = await res.json();

  const response = await fetch(
    `${process.env.CATEGORY_ID_API}${categoryId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch category details");
  }

  const category: ICategory = await response.json();

  return (
    <main className=" px-4 pt-4 sm:px-6 sm:pt-8">
      

        {/* ================= Category Header ================= */}
        <section className=" w-full rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm sm:rounded-2xl sm:px-6 sm:py-5 md:py-6 " >
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">

            {/* Category Icon */}
            <div className=" flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-2xl sm:h-11 sm:w-11 sm:rounded-xl sm:text-2xl md:h-12 md:w-12 md:text-3xl " >
              {category.icon}
            </div>

            {/* Category Info */}
            <div className="min-w-0">
              <h1 className=" truncate text-xl font-bold text-slate-900 sm:text-2xl " >
                {category.nameBn}
              </h1>

              <p className=" mt-0.5 text-xs leading-5 text-slate-600 sm:text-sm md:text-base " >
                {formatNumber(singleCategory.length)}
                টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>

          </div>
        </section>

        {/* ================= Products Section ================= */}
        <section className="pt-5 sm:pt-6">

          {/* Section Heading */}
          <div className="mb-4 sm:mb-5">
            <h2 className=" text-sm font-medium text-slate-600 sm:text-base " >
              মোট {formatNumber(singleCategory.length)}টি পণ্য
              দেখানো হচ্ছে
            </h2>
          </div>

          {/* Product Grid */}
          <div className=" grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5 " >
            {singleCategory.map((single) => (
              <ProductCard
                key={single.id}
                product={single}
              />
            ))}
          </div>

        </section>

      
    </main>
  );
};

export default CategoryPage;