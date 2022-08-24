export async function fetchCategories() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchNationalities() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchIngredients() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchImages(ingrediente) {
  const url = `https://www.themealdb.com/images/ingredients/${ingrediente}-Small.png`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchMeals() { // retorna lista de meals
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
}

export async function fetchFoodsList(endPointType) {
  let endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  if (endPointType === 'drinks') {
    endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  }

  const request = await fetch(endpoint);
  const response = await request.json();
  return response[endPointType];
}

export async function foodsCategoriesAPI(endPointType) {
  let endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  if (endPointType === 'drinks') {
    endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  }
  const request = await fetch(endpoint);
  const response = await request.json();
  return response;
}

export async function searchFoods(endPointType, query) {
  let endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`;

  if (endPointType === 'drinks') {
    endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${query}`;
  }

  const request = await fetch(endpoint);
  const response = await request.json();
  return response;
}

export async function foodDetailAPI(id) { // api para retornar os detalhes da comida.
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await request.json();
  console.log(data);
  return data.meals[0];
}
