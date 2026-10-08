import getProducts from "@/lib/apiUrl/product";
import formatNumber from "@/lib/functions/formatNumber";
import { IProducts } from "@/types/productsType";
import ProductCard from "./ProductCard";

const AllProducts = async () => {
  const products: IProducts[] = await getProducts();

  return (
    <section
      id="allProducts"
      className="w-full scroll-mt-24 px-4 pt-8 sm:px-6 sm:pt-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= Heading ================= */}
        <div className="py-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            সব পণ্য
          </h2>

          <p className="mt-1 text-sm text-slate-600 sm:text-base">
            মোট {formatNumber(products.length)}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

        {/* ================= Products ================= */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllProducts;