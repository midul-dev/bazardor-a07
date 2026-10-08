import getProducts from '@/lib/apiUrl/product';
import { IProducts } from '@/types/productsType';
import ProductCard from './ProductCard';

const PriceIncrease = async () => {
    const products: IProducts[] = await getProducts()
    const topRisers = products.filter(product => product.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct)

    return (
        <div className='px-6 pt-6'>
            <h1 className='flex gap-2 items-center pb-4 '><span className='text-red-700'>▲</span><span className='text-2xl font-bold'>আজ দাম বেড়েছে</span></h1>
            <div className='grid grid-cols-3 gap-4'>

                {
                    topRisers.slice(0, 6).map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PriceIncrease; 