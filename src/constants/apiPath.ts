const baseUpl = 'https://www.thecocktaildb.com/';
const prefix = 'api/json/v1/1/';

export const API_PATHS = {
  INGREDIENTS_URL: `${baseUpl}${prefix}list.php?i=list`,
  COCKTAILS_BY_INGR_URL: `${baseUpl}${prefix}filter.php?i=`,
  COCKTAIL_BY_ID: `${baseUpl}${prefix}lookup.php?i=`,
  COCKTAIL_RANDOM: `${baseUpl}${prefix}random.php`,
  INGREDIENT_PIC: `${baseUpl}images/ingredients/`,
};
