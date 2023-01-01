export const load = async () => {
  const getMonkers = async () => {
    const resp = await fetch('https://api.sampleapis.com/monstersanctuary/monsters');
    const json = await resp.json();
    return json;
  };
  const monkers = await getMonkers();
  return {
    monkers,
  };
};