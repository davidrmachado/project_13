export const style = {
  textDecorationLine: '',
};

// export function handleCheckbox(estilo) {
//   if (estilo.textDecorationLine === '') {
//     estilo.textDecorationLine = 'line-through';
//   } else {
//     estilo.textDecorationLine = '';
//   }
// }

export const handleShare = (pathname, func) => {
  const copyText = `http://localhost:3000${pathname}`;
  navigator.clipboard.writeText(copyText);
  func(true);
};

export const handleFavorite = (type, array, setFav) => {
  if (type === 'drinks') {
    const localStorage = array.map((recipe) => (
      { id: recipe.idDrink,
        type: 'drink',
        nationality: '',
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic,
        name: recipe.strDrink,
        image: recipe.strDrinkThumb }
    ));
    window.localStorage.setItem('favoriteRecipes', JSON.stringify(localStorage));
    setFav((prevState) => [...prevState, array[0].idDrink]);
  } else if (type === 'foods') {
    const localStorage = array.map((recipe) => (
      { id: recipe.idMeal,
        type: 'food',
        nationality: recipe.strArea,
        category: recipe.strCategory,
        alcoholicOrNot: '',
        name: recipe.strMeal,
        image: recipe.strMealThumb }
    ));
    window.localStorage.setItem('favoriteRecipes', JSON.stringify(localStorage));
    setFav((prevState) => [...prevState, array[0].idMeal]);
  }
};

export const handleHeart = (id, fav, white, black) => {
  // const teste = document.getElementById('teste').attributes.src;
  const checked = fav.includes(id);
  if (checked) {
    console.log(document.getElementById('teste'));
    return black;
  }
  // teste.includes('white') ? teste = black : teste = white;
  return white;
};
