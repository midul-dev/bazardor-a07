import React from 'react';

const getProducts = async () => {
    const res = await fetch(process.env.PRODUCT_API)

    return res.json()
};

export default getProducts;