import formatNumber from '@/lib/functions/formatNumber';
import getUnit from '@/lib/functions/formatUnit';
import { IProducts } from '@/types/productsType';
import React from 'react';

const PriceSummary = ({ marketPrices, singleProduct }: { marketPrices: { min: number; max: number }[], singleProduct:IProducts }) => {
    return (
        <section className="mt-5 rounded-2xl border border-[#dfe8df] bg-white/80 p-4 sm:p-5">
            <h2 className="mb-4 text-lg font-bold text-slate-900 sm:text-xl">
                দামের সারসংক্ষেপ
            </h2>

            {(() => {
                const lowestPrice = Math.min(
                    ...marketPrices.map((market) => market.min)
                );

                const highestPrice = Math.max(
                    ...marketPrices.map((market) => market.max)
                );

                const averagePrice =
                    marketPrices.length > 0
                        ? marketPrices.reduce(
                              (total, market) => total + (market.min + market.max) / 2,
                              0
                          ) / marketPrices.length
                        : 0;

                const priceSummary = [
                    {
                        title: 'সর্বনিম্ন দাম',
                        price: lowestPrice,
                        description: 'সবচেয়ে কম দামের বাজার',
                        color: 'text-green-600',
                    },
                    {
                        title: 'সর্বোচ্চ দাম',
                        price: highestPrice,
                        description: 'সবচেয়ে বেশি দামের বাজার',
                        color: 'text-red-500',
                    },
                    {
                        title: 'গড় দাম',
                        price: averagePrice,
                        description: `প্রতি ${getUnit(singleProduct.unit)}-এর হিসাবে`,
                        color: 'text-green-600',
                    },
                ];

                return (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {priceSummary.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-[#dfe8df] p-4 transition-colors hover:bg-[#f8faf8] sm:p-5"
                            >
                                <p className="text-sm text-slate-500">{item.title}</p>

                                <p className={`mt-1 text-2xl font-bold ${item.color}`}>
                                    {formatNumber(Math.round(item.price))}
                                    <span className="ml-1 text-sm font-medium">টাকা</span>
                                </p>

                                <p className="mt-1 text-xs text-slate-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                );
            })()}
        </section>
    );
};

export default PriceSummary;