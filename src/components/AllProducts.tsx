import getProducts from "@/lib/apiUrl/product";
import formatNumber from "@/lib/functions/formatNumber";
import { IProducts } from "@/types/productsType";
import ProductCard from "./ProductCard";
import CategoryProduct from "./CategoryProduct";

const AllProducts = async () => {
  const products: IProducts[] = await getProducts();

  return (
    <section
      id="allProducts"
      className="w-full scroll-mt-24 px-4 pt-8 sm:px-6 sm:pt-8 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= Heading ================= */}
        <CategoryProduct category={products} title={"সব পণ্য"} />

      </div>
    </section>
  );
};

export default AllProducts;