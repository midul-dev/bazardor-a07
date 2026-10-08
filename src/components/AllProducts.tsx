import getProducts from '@/lib/apiUrl/product';
import { IProducts } from '@/types/productsType';
import ProductCard from './ProductCard';
import formatNumber from '@/lib/functions/formatNumber';

const AllProducts =async () => {
    const products: IProducts[] = await getProducts()
    return (
        
        <div className='px-6 pt-6'>
            <div className='grid gap-2 items-center py-4'>
                    <h1 className='text-2xl font-bold'>
                        সব পণ্য</h1>
                        <p>মোট {formatNumber(products.length)}টি পণ্য দেখানো হচ্ছে</p>
                        </div>
                    <div className='grid grid-cols-3 gap-4'>
        
                        {
                           products.map(allProducts => <ProductCard key={allProducts.id} product={allProducts}/>)
                        }
                    </div>
                </div>
    );
};

export default AllProducts;