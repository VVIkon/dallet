import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia';

export const useAuth = () => {
  const authStore = useAuthStore();
  const { getAccessToken, getProfile} = authStore;
  const { state, getToken, getStatus } = storeToRefs(authStore);
  const isTokenated = computed(() => !!getToken.value);
  const isAuthenticated = computed(() => (getStatus.value === 'got_user') );

  return {
    state,
    isTokenated,
    isAuthenticated,
    getAccessToken,
    getProfile,
  }
}
