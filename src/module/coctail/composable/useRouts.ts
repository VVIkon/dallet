import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ROUTES_PATHS } from '@/constants'
import { useCocktails } from './useCocktails'

export const useRouts = () => {
  const { component, removeIngredient } = useCocktails()
  const route = useRoute()
  const router = useRouter()
  const routeName = computed(() => route.name)

  const goForCocktailRandom = () => {
    // console.log('>>> routeName.value:', routeName.value)

    router.push(ROUTES_PATHS.COCKTAIL_RANDOM)
    if (routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
      router.go(-1)
    }
  }

  const goBack = () => {
    // console.log('>>> component: ', component)
    if (component) {
      removeIngredient()
    }
    router.go(-1)
  }

  const cocktailId = computed(() => route.path.split('/').pop())

  return {
    cocktailId,
    goForCocktailRandom,
    goBack,
  }
}
