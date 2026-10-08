import getProducts from "@/lib/apiUrl/product";
import { IProducts } from "@/types/productsType";
import ProductCard from "./ProductCard";

const PriceIncrease = async () => {
  const products: IProducts[] = await getProducts();

  const topRisers = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct);

  return (
    <section className="w-full px-4 pt-8 sm:px-6 sm:pt-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mb-4 flex items-center gap-2 sm:mb-5">
          <span className="text-xl font-bold text-red-700 sm:text-2xl">
            ▲
          </span>

          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            আজ দাম বেড়েছে
          </h2>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {topRisers.slice(0, 6).map((product) => (
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

export default PriceIncrease;