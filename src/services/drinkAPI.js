async function fetchDrinks() {
  const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default fetchDrinks.drinks;
