import getProducts from '@/lib/apiUrl/product';
import { IProducts } from '@/types/productsType';
import ProductCard from './ProductCard';

const PriceDecrease = async () => {
    const products: IProducts[] = await getProducts()
    const topFallers = products.filter(product => product.change.dir === 'down').sort((a, b) => a.change.pct - b.change.pct)

    return (
        <div className='px-6 pt-6'>
            <h1 className='flex gap-2 items-center py-4'><span className='text-green-700'>▼</span><span className='text-2xl font-bold'>
                আজ দাম কমেছে</span></h1>
            <div className='grid grid-cols-3 gap-4'>

                {
                    topFallers.slice(0, 6).map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PriceDecrease; 