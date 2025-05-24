import { useCockTailStore } from "@/stores/CockTailStore";
import { storeToRefs } from "pinia";

export const useCocktails = () => {
  const cocktailStore = useCockTailStore();
  const { getIngredients, getCocktailsByIngradient, getCocktailsById, getRandomCocktail, setIngredient } = cocktailStore;
  getIngredients();
  const { ingredients, component, cocktails, cocktail } = storeToRefs(cocktailStore);

  const getCocktails = () => {
    getCocktailsByIngradient(component.value);
  }

  const removeIngredient = () => {
    setIngredient('');
  }

  const isBackButtonVisible = !!component
  return {
    isBackButtonVisible,
    ingredients,
    component,
    cocktails,
    cocktail,
    getCocktails,
    removeIngredient,
    getCocktailsById,
    getRandomCocktail
  }
}
