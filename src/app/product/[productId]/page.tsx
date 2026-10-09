import getUnit from "@/lib/functions/formatUnit";
import { IProducts } from "@/types/productsType";
import Link from "next/link";


const ProductDetailPage =async ({params}) => {
    const {productId} = await params
const res =await fetch(`${process.env.PRODUCT_DETAIL_API}${productId}`)
const singleProduct :IProducts = await res.json()

    return (
        <main className="min-h-screen bg-[#f0f5f0] text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pt-8 lg:px-8">
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
                প্রতি {getUnit(singleProduct.unit)} · {singleProduct.category}
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">
                গতকালের তুলনায় আজ দাম কমেছে{" "}
                <span className="font-semibold text-green-600">
                 {Math.abs(singleProduct.change.pct)} %
                </span>
              </p>
            </div>
          </div>

          {/* Today's Price */}
          <div className="flex shrink-0 items-center justify-between gap-6 rounded-2xl bg-[#f0f5f0] px-5 py-4 sm:min-w-[135px] sm:flex-col sm:gap-0 sm:text-center">
            <div>
              <p className="text-xs text-slate-500">আজকের দাম</p>
              <p className="mt-1 text-3xl font-bold">
                {singleProduct.today}
              </p>
              <p className="text-xs text-slate-500">
                টাকা / {getUnit(singleProduct.unit)}
              </p>
            </div>

            <span className="mt-1 text-sm font-semibold text-green-600">
              ▼ {Math.abs(singleProduct.change)} %
            </span>
          </div>
        </section>

        {/* Price Summary */}
        <section className="mt-5 rounded-2xl border border-[#dfe8df] bg-white/80 p-4 sm:p-5">
          <h2 className="mb-4 text-lg font-bold sm:text-xl">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* {priceSummary.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#dfe8df] p-4 transition-colors hover:bg-[#f8faf8] sm:p-5"
              >
                <p className="text-sm text-slate-500">{item.title}</p>

                <p className={`mt-1 text-2xl font-bold ${item.color}`}>
                  {formatPrice(item.price)}
                  <span className="ml-1 text-sm font-medium">টাকা</span>
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {item.description}
                </p>
              </div>
            ))} */}
          </div>

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
                    {/* {marketPrices.map((market, index) => (
                      <tr
                        key={market.name}
                        className={`border-t border-[#e4ebe4] transition-colors hover:bg-green-50 ${
                          index % 2 === 1 ? "bg-[#f0f5f0]" : "bg-white"
                        }`}
                      >
                        <td className="whitespace-nowrap px-4 py-3 font-medium sm:px-5">
                          {market.name}
                        </td>

                        <td className="whitespace-nowrap px-4 py-3 text-slate-500 sm:px-5">
                          {market.division}
                        </td>

                        <td className="whitespace-nowrap px-4 py-3 text-right sm:px-5">
                          {formatPrice(market.min)} টাকা
                        </td>

                        <td className="whitespace-nowrap px-4 py-3 text-right sm:px-5">
                          {formatPrice(market.max)} টাকা
                        </td>

                        <td className="whitespace-nowrap px-4 py-3 text-right font-semibold sm:px-5">
                          {market.avg} টাকা
                        </td>
                      </tr>
                    ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Related Category */}
        <section className="mt-7">
          <Link
            href="/category/sobji"
            className="inline-flex items-center gap-2 rounded-lg py-2 text-sm font-semibold transition-colors hover:text-green-700"
          >
            🥬 সব সবজি
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
    );
};

export default ProductDetailPage;