export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/pokedex?pokemon=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}