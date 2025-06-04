import { computed, toRefs } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { ROUTES_PATHS } from '@/constants'
import { useRouter } from 'vue-router'
// import type { IAuthUser } from '@/stores/authStore';

export const useAuth = () => {
  // const authUser= ref<IAuthUser|null>(null);
  const router = useRouter()
  const authStore = useAuthStore();
  const { getAccessToken, getProfile, getToken } = authStore;
  const { state } = toRefs(authStore);

  const isTokenated = computed(() => !!getToken);
  const isAuthenticated = computed(() => (state.value.status === 'got_user') );
  const getUser = async() => {
    await getProfile();
    console.log('>>> getAuthUser:', state.value.authUser);
    return state.value.authUser;
    // authUser.value = state.value.authUser;
  }

  const goToLogin = () => {
    router.push(ROUTES_PATHS.LOGIN)
  }

  return {
    state,
    isTokenated,
    isAuthenticated,
    getToken,
    // getAuthUser,
    // authUser,
    getUser,
    getAccessToken,
    getProfile,
    goToLogin,
  }
}
