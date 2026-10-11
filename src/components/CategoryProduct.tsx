'use client'
import formatNumber from '@/lib/functions/formatNumber';
import { IProducts } from '@/types/productsType';
import ProductCard from './ProductCard';

const CategoryProduct = ({singleCategory} : {singleCategory:IProducts[]}) => {
    return (
        <div>
             {/* Section Heading */}
                      <div className="mb-4 sm:mb-5 flex items-center justify-between gap-4">
                        <h2 className=" text-sm font-medium text-slate-600 sm:text-base " >
                          মোট {formatNumber(singleCategory.length)}টি পণ্য
                          দেখানো হচ্ছে
                        </h2>
            
                          <div className="flex items-center gap-3 text-slate-600">
                        <p>সাজান</p>
                        <select defaultValue="ডিফল্ট" className="select rounded-xl">
                          <option disabled={true}>ডিফল্ট </option>
                          <option>দাম : কম থেকে বেশি </option>
                          <option>দাম : বেশি থেকে কম  </option>
                        </select>
                      </div>
                      </div>
            
                      {/* Product Grid */}
                      <div className=" grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5 " >
                        {singleCategory.map((single) => (
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