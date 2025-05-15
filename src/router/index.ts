import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HangManView from '../views/HangManView.vue';
// import CocktailView from '../views/CocktailView.vue';
import CockTail from '../components/coctail/page/CockTail.vue';
import CockTailCard from '../components/coctail/page/CocktailCard.vue';
import CocktailRandom from '../components/coctail/page/CocktailRandom.vue';
import { ROUTES_PATHS } from '@/constants';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: HomeView,
    },
    {
      path: ROUTES_PATHS.HANGMAN,
      name: ROUTES_PATHS.HANGMAN,
      component: HangManView,
    },
    {
      path: ROUTES_PATHS.COCKTAILS,
      name: ROUTES_PATHS.COCKTAILS,
      component: CockTail,
    },
    {
      path: ROUTES_PATHS.COCKTAIL,
      name: ROUTES_PATHS.COCKTAIL,
      component: CockTailCard,
    },
    {
      path: ROUTES_PATHS.COCKTAIL_RANDOM,
      name: ROUTES_PATHS.COCKTAIL_RANDOM,
      component: CocktailRandom,
    },
    {
      path: ROUTES_PATHS.ABOUT,
      name: ROUTES_PATHS.ABOUT,
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
