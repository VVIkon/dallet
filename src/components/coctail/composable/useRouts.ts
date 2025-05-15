import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ROUTES_PATHS } from "@/constants";
import { useCocktails } from '../composable/useCocktails';

export const useRouts = () => {
  const { component, removeIngredient } = useCocktails();
  const route = useRoute();
  const router = useRouter();
  const routeName = computed(() => route.name);

  const goForCocktailRandom = () => {
    router.push(ROUTES_PATHS.COCKTAIL_RANDOM);
    if (routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
      router.go(-1);
    }
  }

  const goBack = () => {
    if (component) {
      removeIngredient()
    } else {
        router.go(-1)
    }
  }

  const cocktailId = computed(() => route.path.split("/").pop());

  return {
    cocktailId,
    goForCocktailRandom,
    goBack
  }
}
