export async function fetchDrinks() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  return data.drinks;
}

export async function fetchDrinksCategories() { // api para retornar lista do requisito 20
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.drinks;
}

export async function drinkDetailAPI(id) { // api para retornar os detalhes da bebida
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await request.json();
  console.log(data);
  return data.drinks;
}
