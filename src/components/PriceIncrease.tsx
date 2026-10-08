import getProducts from '@/lib/apiUrl/product';
import { IProducts } from '@/types/productsType';
import React from 'react';
import ProductCard from './ProductCard';

const PriceIncrease =async () => {
    const products : IProducts[] = await getProducts()
    const hightPricedProduct = products.filter(product => product.change.dir === 'up')
    
    return (
        <div className='px-6'>
            <h1 className='flex gap-2 items-center py-4'><span className='text-red-700'>▲</span><span className='text-2xl font-bold'>আজ দাম বেড়েছে</span></h1>
        <div className='grid grid-cols-3 gap-4'>
            
           {
            hightPricedProduct.slice(0,6).map(product => <ProductCard key={product.id} product={product} />)
           }
        </div>
        </div>
    );
};

export default PriceIncrease; 