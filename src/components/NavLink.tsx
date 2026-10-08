import { ICategory } from '@/types/categoryType';
import React from 'react';

const NavLink = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const categories = await res.json()
    console.log(categories)
    return (
        <div className='flex gap-6 px-2 py-5'>
            {
                categories.map((category: ICategory) => <div key={category.id}><span> {category.icon} </span> <span className='font-bold'>{category.nameBn}</span> </div>)
            }
        </div>
    );
};

export default NavLink;