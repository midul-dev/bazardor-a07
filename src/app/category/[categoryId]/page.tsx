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
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`
  );

  const singleCategory: IProducts[] = await res.json();

  const response = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/categories/${categoryId}`
  );

  const category: ICategory = await response.json();

  return (
    <div className="px-6 pt-6">

      {/* Category Header */}
      <div className="w-full rounded-2xl border border-slate-200 bg-white px-7 py-6 shadow-sm">
        <div className="flex items-center gap-5">

          {/* Category Icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-3xl">
            {category.icon}
          </div>

          {/* Category Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {category.nameBn}
            </h2>

            <p className="mt-0.5 text-base text-slate-600">
              {formatNumber(singleCategory.length)}
              টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>

        </div>
      </div>

      {/* Products */}
      <div className="pt-6">
        <h1 className="py-4 text-slate-600">
          মোট {formatNumber(singleCategory.length)}টি পণ্য দেখানো হচ্ছে
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {singleCategory.map((single) => (
            <ProductCard
              key={single.id}
              product={single}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default CategoryPage;