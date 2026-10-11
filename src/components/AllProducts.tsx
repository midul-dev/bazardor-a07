import getProducts from "@/lib/apiUrl/product";
import formatNumber from "@/lib/functions/formatNumber";
import { IProducts } from "@/types/productsType";
import ProductCard from "./ProductCard";

const AllProducts = async () => {
  const products: IProducts[] = await getProducts();

  return (
    <section
      id="allProducts"
      className="w-full scroll-mt-24 px-4 pt-8 sm:px-6 sm:pt-8 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= Heading ================= */}
        <div className="py-4 flex items-center justify-between gap-4 sm:py-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              সব পণ্য
            </h2>

            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              মোট {formatNumber(products.length)}টি পণ্য দেখানো হচ্ছে
            </p>
          </div>
          {/* Sorting */}
          <div className="flex items-center gap-3 text-slate-600">
            <p>সাজান</p>
            <select defaultValue="ডিফল্ট" className="select rounded-xl">
              <option disabled={true}>ডিফল্ট </option>
              <option>দাম : কম থেকে বেশি </option>
              <option>দাম : বেশি থেকে কম  </option>
            </select>
          </div>
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