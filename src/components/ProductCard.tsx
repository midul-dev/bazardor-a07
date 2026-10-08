import formatNumber from "@/lib/functions/formatNumber";
import { IProducts } from "@/types/productsType";
import React from "react";

const ProductCard = ({product} : {product:IProducts}) => {
  const isPriceUp = product.change.dir === "up";
  const isPriceFlat = product.change.dir === "flat";
  const priceChangeIcon = isPriceUp ? "▲" : isPriceFlat ? "-" : "▼";
  const priceChangeClass = isPriceUp
    ? "bg-red-50 rounded-xl p-1 text-red-500 group-hover:bg-red-100"
    : isPriceFlat
    ? "bg-base-200 rounded-xl p-1 text-black-500 group-hover:bg-black-100"
    : "bg-green- rounded-xl p-1 text-green-500 group-hover:bg-green-100";

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
        group
        
        cursor-pointer
        rounded-2xl
        border
        border-slate-100
        bg-white
        p-4
        shadow-sm

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1.5
        hover:border-green-500
        hover:shadow-xl
        hover:shadow-green-100

        active:scale-[0.98]
      "
    >
      {/* Top Section */}
      <div className="flex items-start gap-4">

        {/* Product Emoji */}
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-green-50
            text-3xl

            transition-all
            duration-300
            ease-out

            group-hover:scale-110
            group-hover:rotate-3
            group-hover:bg-green-100
          "
        >
          {product.image}
        </div>

        {/* Product Info */}
        <div>
          <h2
            className="
              text-lg
              font-bold
              text-gray-900

              transition-colors
              duration-300

              group-hover:text-green-700
            "
          >
            {product.nameBn}
          </h2>

          <p className="text-sm text-gray-500">
            প্রতি {getUnit(product.unit)}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-5 flex items-end justify-between">

        {/* Price */}
        <div>
          <p className="text-sm text-gray-500">
            আজকের দাম
          </p>

          <p
            className="
              mt-1
              text-xl
              font-bold
              text-gray-900

              transition-transform
              duration-300

              group-hover:translate-x-0.5
            "
          >
           {formatNumber(product.today)} 
            <span className="text-base font-normal">
             {' '} টাকা
            </span>
          </p>
        </div>

        {/* Change Badge */}
        <div
          className={priceChangeClass}
        >
          {priceChangeIcon} {formatNumber(Math.abs(product.change.pct)) } %
        </div>
      </div>
    </div>
  );
};

export default ProductCard;