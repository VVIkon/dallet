import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore';

export const useAuth = () => {
  const authStore = useAuthStore();
    const { status, role, getToken} = authStore;
    const authState = computed(() => {
      return {
        status: status,
        role: role
      }
    })


    return {
      authState: authState.value,
      getToken,
    }
}
