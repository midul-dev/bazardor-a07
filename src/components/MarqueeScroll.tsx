import getProducts from "@/lib/apiUrl/product";
import formatNumber from "@/lib/functions/formatNumber";
import { IProducts } from "@/types/productsType";
import Marquee from "react-fast-marquee";

const MarqueeScroll = async () => {
  

  const products: IProducts[] = await getProducts()

  

  const getUnit = (unit: string) => {
    const units: Record<string, string> = {
      kg: "কেজি",
      litre: "লিটার",
      piece: "পিস",
      dozen: "ডজন",
    };

    return units[unit] || unit;
  };

  return (
    <div className="w-full border-y border-green-100 bg-green-50/50">
      <Marquee
        speed={100}
        pauseOnHover
        gradient
        gradientColor="#f0fdf4"
        gradientWidth={80}
        className="py-2"
      >
        {products.map((product) => {
          const isUp = product.change.dir === "up";
          const isDown = product.change.dir === "down";

          return (
            <div
              key={product.id}
              className="flex items-center gap-3 px-5 sm:px-7 "
            >
              {/* Product */}
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="flex items-center justify-center rounded-full bg-white shadow-sm">
                  {product.image}
                </span>

                <span className="text-sm font-semibold text-gray-800">
                  {product.nameBn}
                </span>
              </div>

              {/* Price */}
              <div className="whitespace-nowrap text-sm text-gray-600">
                <span className="font-medium text-gray-900">
                  {formatNumber(product.today)}
                </span>{" "}
                টাকা/{getUnit(product.unit)}
              </div>

              {/* Change */}
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold whitespace-nowrap ${
                  isUp
                    ? "bg-red-50 text-red-600 ring-1 ring-red-100"
                    : isDown
                    ? "bg-green-50 text-green-600 ring-1 ring-green-100"
                    : "bg-gray-100 text-gray-500 ring-1 ring-gray-200"
                }`}
              >
                {isUp && "▲"}
                {isDown && "▼"}
                {!isUp && !isDown && "—"}

                {formatNumber(Math.abs(product.change.pct))}%
              </span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarqueeScroll;