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

export async function fetchMeals() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
