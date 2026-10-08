import { ICategory } from '@/types/categoryType';
import Link from 'next/link';
import React from 'react';

const NavLink = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
    const categories = await res.json()
  
    return (
        <div className='flex gap-6 px-2 py-5'>
            {
                categories.map((category: ICategory) => <Link href={`/category/${category.slug}`} key={category.id}><span> {category.icon} </span> <span className='font-bold'>{category.nameBn}</span> </Link>)
            }
        </div>
    );
};

export default NavLink;