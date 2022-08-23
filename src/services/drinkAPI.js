export async function fetchDrinks() {
  const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// ------ requisito 12 ------
// ------ realiza pesquisa pelo nome do igrediente ------

export async function fetchDrinkIngredients(ingrediente) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// ------ realiza pesquisa pelo nome da receita ------

export async function fetchDrinkNames(name) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// ------ realiza pesquisa pela primeira letra do nome da receita ------

export async function fetchDrinkFirstLetter(FirstLetter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${FirstLetter}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
