'use client'
import formatNumber from '@/lib/functions/formatNumber';
import { IProducts } from '@/types/productsType';
import ProductCard from './ProductCard';
import { useState } from 'react';


const CategoryProduct = ({ category, title }: { category: IProducts[]; title?: string }) => {
  const [sort, setSort] = useState('default')
  const sortedProducts = [...category]
  if (sort === 'low') {
    sortedProducts.sort((a, b) => a.today - b.today)
  }
  if (sort === 'high') {
    sortedProducts.sort((a, b) => b.today - a.today)
  }
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }
  return (
    <div>
      {/* Section Heading */}
      <div className="mb-4 sm:mb-5 flex items-center justify-between gap-4">
        <div>
          
        {title && (<h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{title}</h2>)}
        <h2 className=" text-sm font-medium text-slate-600 sm:text-base " > মোট {formatNumber(category.length)}টি পণ্য দেখানো হচ্ছে </h2>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <p>সাজান</p>
          <select value={sort} onChange={handleSortChange} className="select rounded-xl">
            <option value="default" disabled={true}>ডিফল্ট </option>
            <option value="low">দাম : কম থেকে বেশি </option>
            <option value="high">দাম : বেশি থেকে কম  </option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className=" grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5 " >
        {sortedProducts.map((single) => (
          <ProductCard
            key={single.id}
            product={single}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;