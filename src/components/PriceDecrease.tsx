import getProducts from "@/lib/apiUrl/product";
import { IProducts } from "@/types/productsType";
import ProductCard from "./ProductCard";

const PriceDecrease = async () => {
  const products: IProducts[] = await getProducts();

  const topFallers = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct);

  return (
    <section className="w-full px-4 pt-8 sm:px-6 sm:pt-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= Heading ================= */}
        <div className="mb-4 flex items-center gap-2 sm:mb-5">
          <span className="text-xl font-bold text-green-700 sm:text-2xl">
            ▼
          </span>

          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            আজ দাম কমেছে
          </h2>
        </div>

        {/* ================= Products ================= */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {topFallers.slice(0, 6).map((product) => (
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

export default PriceDecrease;