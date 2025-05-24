import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import HangManView from '../views/HangManView.vue'
import CockTail from '../module/coctail/page/CockTail.vue'
import CockTailCard from '../module/coctail/page/CocktailCard.vue'
import CocktailRandom from '../module/coctail/page/CocktailRandom.vue'
import { ROUTES_PATHS } from '@/constants'
import { useAuth } from '@/module/auth/composable/useAuth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: ROUTES_PATHS.LOGIN,
      name: ROUTES_PATHS.LOGIN,
      component: LoginView,
      meta: { requiresAuth: false }
    },
    {
      path: ROUTES_PATHS.HANGMAN,
      name: ROUTES_PATHS.HANGMAN,
      component: HangManView,
      meta: { requiresAuth: false}
    },
    {
      path: ROUTES_PATHS.COCKTAILS,
      name: ROUTES_PATHS.COCKTAILS,
      component: CockTail,
      meta: { requiresAuth: false}
    },
    {
      path: ROUTES_PATHS.COCKTAIL,
      name: ROUTES_PATHS.COCKTAIL,
      component: CockTailCard,
      meta: { requiresAuth: false}
    },
    {
      path: ROUTES_PATHS.COCKTAIL_RANDOM,
      name: ROUTES_PATHS.COCKTAIL_RANDOM,
      component: CocktailRandom,
      meta: { requiresAuth: false}
    },
    {
      path: ROUTES_PATHS.ABOUT,
      name: ROUTES_PATHS.ABOUT,
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: false}
    },
  ],
})

router.beforeEach((to, from, next) => {
  // const { isAuthenticated } = useAuth();
  const { isTokenated } = useAuth();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  // console.log('>>> 00 isAuthenticated: ', isAuthenticated.value);
  if (requiresAuth && !isTokenated.value) {
    // console.log('>>> requiresAuth: ', requiresAuth);
    // console.log('>>> authState: ', authState);
     next(ROUTES_PATHS.LOGIN)
  } else {
    next()
  }
})

export default router
