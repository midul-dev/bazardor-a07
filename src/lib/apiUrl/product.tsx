import React from 'react';

const getProducts = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')

    return res.json()
};

export default getProducts;