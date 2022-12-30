export const load = async () => {
  const getProducts = async () => {
    const resp = await fetch('https://dummyjson.com/products');
    const json = await resp.json();
    return json;
  }
  const products = await getProducts();

  const getCategories = async () => {
    const resp = await fetch('https://dummyjson.com/products/categories');
    const json = await resp.json();
    return json;
  }
  const categories = await getCategories();
  return {
    categories,
    products
  }
}