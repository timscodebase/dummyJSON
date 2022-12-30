export const load = async () => {
  const getQuotes = async () => {
    const resp = await fetch('https://dummyjson.com/quotes');
    const json = await resp.json();
    return json;
  };
  const quotes = await getQuotes();
  return {
    quotes,
  };
};