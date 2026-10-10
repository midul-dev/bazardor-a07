import PriceSummary from "@/components/PriceSummary";
import formatNumber from "@/lib/functions/formatNumber";
import getUnit from "@/lib/functions/formatUnit";
import { IProducts } from "@/types/productsType";
import Link from "next/link";


const ProductDetailPage = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const { productId } = await params
  const res = await fetch(`${process.env.PRODUCT_DETAIL_API}${productId}`)
  const singleProduct: IProducts = await res.json()
  const marketPrices: { market: string; division: string; min: number; max: number }[] = singleProduct.markets
const shortedMarketPrices= marketPrices.sort((a, b)=>a.min - b.min)

  const isPriceUp = singleProduct.change.dir === "up";
  const isPriceFlat = singleProduct.change.dir === "flat";
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





  return (
    <main className="min-h-screen  text-slate-900">

      <div className="px-4 pb-12 pt-6 sm:px-6 sm:pt-8 ">
        {/* Breadcrumb */}
        {/* <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500"
        >
          <Link href="/" className="transition hover:text-green-700">
            হোম
          </Link>
          <span>›</span>
          <Link
            href="/category/sobji"
            className="transition hover:text-green-700"
          >
            🥬 সবজি
          </Link>
          <span>›</span>
          <span className="font-medium text-slate-800">
            name
          </span>
        </nav> */}

        {/* Category Hero */}
        <section className="flex flex-col gap-5 rounded-2xl border border-[#dfe8df] bg-white/80 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-4xl sm:h-[68px] sm:w-[68px]">
              {singleProduct.image}
            </div>

            <div className="min-w-0">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {singleProduct.nameBn}
              </h1>

              <p className="mt-1 text-sm text-slate-500">

                প্রতি {getUnit(singleProduct.unit)} · {singleProduct.categoryNameBn}
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">
                গতকালের তুলনায় আজ দাম কমেছে{" "}
                <span className="font-semibold text-green-600">
                  {formatNumber(Math.abs(singleProduct.change.pct))} %
                </span>
              </p>
            </div>
          </div>

          {/* Today's Price */}
          <div className="flex shrink-0 items-center justify-between gap-6 rounded-2xl bg-[#f0f5f0] px-5 py-4 sm:min-w-[135px] sm:flex-col sm:gap-0 sm:text-center">
            <div>
              <p className="text-xs text-slate-500">আজকের দাম</p>
              <p className="mt-1 text-3xl font-bold">
                {formatNumber(singleProduct.today)}
              </p>
              <p className="text-xs text-slate-500">
                টাকা / {getUnit(singleProduct.unit)}
              </p>
            </div>

            <span className={priceChangeClass}>
              {`${priceChangeIcon} ${formatNumber(Math.abs(singleProduct.change.pct))}}%`}
            </span>
          </div>
        </section>

        {/* Price Summary */}
        <section>
          <PriceSummary marketPrices={marketPrices} singleProduct={singleProduct} />

          {/* Market Price Table */}
          <div className="mt-6">
            <h2 className="mb-3 text-lg font-bold sm:text-xl">
              বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-hidden rounded-2xl border border-[#dfe8df]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-white text-slate-500">
                      <th className="px-4 py-3 font-medium sm:px-5">
                        বাজার
                      </th>
                      <th className="px-4 py-3 font-medium sm:px-5">
                        বিভাগ
                      </th>
                      <th className="px-4 py-3 text-right font-medium sm:px-5">
                        সর্বনিম্ন
                      </th>
                      <th className="px-4 py-3 text-right font-medium sm:px-5">
                        সর্বোচ্চ
                      </th>
                      <th className="px-4 py-3 text-right font-medium sm:px-5">
                        গড়
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {shortedMarketPrices.map((market, index) => {

                      const totalPrice = market.min + market.max
                      const avgPrice = totalPrice / 2
                      return (
                        <tr
                          key={market.market}
                          className={`border-t border-[#e4ebe4] transition-colors hover:bg-green-50 ${index % 2 === 1 ? "bg-[#f0f5f0]" : "bg-white"
                            }`}
                        >
                          <td className="whitespace-nowrap px-4 py-3 font-medium sm:px-5">
                            {market.market}
                          </td>

                          <td className="whitespace-nowrap px-4 py-3 text-slate-500 sm:px-5">
                            {market.division}
                          </td>

                          <td className="whitespace-nowrap px-4 py-3 text-right sm:px-5">
                            {formatNumber(market.min)} টাকা
                          </td>

                          <td className="whitespace-nowrap px-4 py-3 text-right sm:px-5">
                            {formatNumber(market.max)} টাকা
                          </td>

                          <td className="whitespace-nowrap px-4 py-3 text-right font-semibold sm:px-5">
                            {formatNumber(avgPrice)} টাকা
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Related Category */}
        <section className="mt-7">
          <Link
            href={`/category/${singleProduct.category}`}
            className="inline-flex items-center gap-2 rounded-lg py-2 text-sm font-semibold transition-colors hover:text-green-700"
          >
            {`${singleProduct.categoryIcon} সব ${singleProduct.categoryNameBn}`}
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailPage;