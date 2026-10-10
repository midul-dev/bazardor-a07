

const getProducts = async () => {
    const productApi = process.env.PRODUCT_API;
    if (!productApi) {
        throw new Error("PRODUCT_API is not configured");
    }

    const res = await fetch(productApi)
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json()
};

export default getProducts;