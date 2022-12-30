export const load = async ({ params }) => {
  const getProducts = async () => {
    const resp = await fetch(`https://dummyjson.com/products/${params.productid}`);
    const json = await resp.json();
    return json;
  }
  const product = await getProducts();
  return {
    product,
  }
}