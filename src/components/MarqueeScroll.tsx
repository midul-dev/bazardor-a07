import getProducts from "@/lib/apiUrl/product";
import formatNumber from "@/lib/functions/formatNumber";
import { IProducts } from "@/types/productsType";
import Marquee from "react-fast-marquee";

const MarqueeScroll = async () => {
  const products: IProducts[] = await getProducts();

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
    <div className="w-full overflow-hidden border-y border-green-100 bg-white">
      <Marquee speed={120} pauseOnHover gradient gradientColor="#f0fdf4" gradientWidth={60} className="py-1.5 flex items-center" >
        {products.map((product) => {
          const isUp = product.change.dir === "up";
          const isDown = product.change.dir === "down";

          return (
            <div key={product.id} className=" flex shrink-0 items-center gap-2 px-3 sm:gap-1 sm:px-5 " >
              {/* Product */}
              <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap sm:gap-2">
                <span className=" flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sm shadow-sm sm:h-7 sm:w-7 sm:text-base " >
                  {product.image}
                </span>

                <span className=" text-xs font-semibold text-gray-800 sm:text-sm " >
                  {product.nameBn}
                </span>
              </div>

              {/* Price */}
              <div className=" whitespace-nowrap text-xs text-gray-600 sm:text-sm " >
                <span className="font-semibold text-gray-900">
                  {formatNumber(product.today)}
                </span>{" "}
                টাকা/{getUnit(product.unit)}
              </div>

              {/* Price Change */}
              <span className={` inline-flex shrink-0 items-center gap-0.5 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold sm:gap-1 sm:px-2.5 sm:py-1 sm:text-xs ${isUp ? "bg-red-50 text-red-600 ring-1 ring-red-100" : isDown ? "bg-green-50 text-green-600 ring-1 ring-green-100" : "bg-gray-100 text-gray-500 ring-1 ring-gray-200"} `} >
                {isUp && "▲"}
                {isDown && "▼"}
                {!isUp && !isDown && "—"}

                {formatNumber(Math.abs(product.change.pct))}%
              </span>

              {/* Separator */}
              <span className="ml-1 text-green-200 sm:ml-2">
                •
              </span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarqueeScroll;