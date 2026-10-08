import formatNumber from "@/lib/functions/formatNumber";
import { IProducts } from "@/types/productsType";

const ProductCard = ({ product }: { product: IProducts }) => {
  const isPriceUp = product.change.dir === "up";
  const isPriceFlat = product.change.dir === "flat";

  const priceChangeIcon = isPriceUp
    ? "▲"
    : isPriceFlat
    ? "—"
    : "▼";

  const priceChangeClass = isPriceUp
    ? "bg-red-50 text-red-500 group-hover:bg-red-100"
    : isPriceFlat
    ? "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
    : "bg-green-50 text-green-500 group-hover:bg-green-100";

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
    <div
      className="
        group w-full cursor-pointer
        rounded-xl border border-slate-100
        bg-white
        p-3
        shadow-sm

        transition-all duration-300 ease-out

        hover:-translate-y-1.5
        hover:border-green-500
        hover:shadow-xl
        hover:shadow-green-100

        active:scale-[0.98]

        sm:rounded-2xl
        sm:p-4
      "
    >
      {/* ================= Top Section ================= */}
      <div className="flex items-start gap-3 sm:gap-4">

        {/* Product Emoji */}
        <div
          className="
            flex
            h-10 w-10
            shrink-0
            items-center justify-center
            rounded-lg
            bg-green-50
            text-2xl

            transition-all duration-300 ease-out

            group-hover:scale-110
            group-hover:rotate-3
            group-hover:bg-green-100

            sm:h-12 sm:w-12
            sm:rounded-xl
            sm:text-3xl
          "
        >
          {product.image}
        </div>

        {/* Product Info */}
        <div className="min-w-0">
          <h2
            className="
              truncate
              text-base
              font-bold
              text-gray-900

              transition-colors duration-300
              group-hover:text-green-700

              sm:text-lg
            "
          >
            {product.nameBn}
          </h2>

          <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
            প্রতি {getUnit(product.unit)}
          </p>
        </div>
      </div>

      {/* ================= Bottom Section ================= */}
      <div
        className="
          mt-4
          flex items-end justify-between
          gap-2

          sm:mt-5
        "
      >
        {/* Price */}
        <div className="min-w-0">
          <p className="text-xs text-gray-500 sm:text-sm">
            আজকের দাম
          </p>

          <p
            className="
              mt-0.5
              whitespace-nowrap
              text-lg
              font-bold
              text-gray-900

              transition-transform duration-300
              group-hover:translate-x-0.5

              sm:mt-1
              sm:text-xl
            "
          >
            {formatNumber(product.today)}

            <span className="ml-1 text-sm font-normal sm:text-base">
              টাকা
            </span>
          </p>
        </div>

        {/* Change Badge */}
        <div
          className={`
            inline-flex
            shrink-0
            items-center
            gap-0.5
            whitespace-nowrap
            rounded-full

            px-2
            py-1
            text-[10px]
            font-semibold

            transition-all duration-300
            group-hover:scale-105

            sm:gap-1
            sm:px-2.5
            sm:py-1.5
            sm:text-xs

            ${priceChangeClass}
          `}
        >
          {priceChangeIcon}

          {formatNumber(Math.abs(product.change.pct))}%
        </div>
      </div>
    </div>
  );
};

export default ProductCard;