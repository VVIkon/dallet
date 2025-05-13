import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HangManView from '../views/HangManView.vue';
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
      path: ROUTES_PATHS.ABOUT,
      name: ROUTES_PATHS.ABOUT,
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
