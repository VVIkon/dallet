import { computed } from 'vue'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'
import { AUTH_PATHS } from '@/constants'
import Cookies from 'js-cookie';

export interface IAuthUser {
  userId: number;
  email: string;
  roles: string[],
  active: number,
  fio: string,
}

interface State {
  token: string | null
  status: 'logout' | 'got_token' | 'got_user' | 'success' | 'access_denid'
  role: 'guest' | 'user' | 'superUser' | 'admin'
  authUser: IAuthUser | null;
}

export const useAuthStore = defineStore('auth', () => {
  const state = reactive<State>({
    token: '',
    role: 'guest',
    status: 'logout',
    authUser: null,
  })

  // const getStatus = computed(() => state.status);
  // const getAuthUser = computed(() => state.authUser);
  // const getRole = computed(() => state.role);
  const getToken = computed(() => {
    state.token = Cookies.get('token');
    return state.token;
  });

  async function getAccessToken(name: string, pass: string) {
    try {
      const data = await axios.post(AUTH_PATHS.AUTH_URL, { name, pass })
      const { access_token, expires } = data?.data
      if (access_token && expires) {
        state.status = 'got_token';
        state.token = access_token;
        Cookies.set('token', access_token, { expires: Number(expires) });
      }
    } catch (error) {
      console.error('getAccessToken Error: ', error)
      throw error
    }
  }

  async function getProfile() {
    try {
      const token = getToken;
      // console.log('>>> getProfile.token: ', token.value)
      const { data } = await axios.get(AUTH_PATHS.AUTH_PROFILE, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      // console.log('>>> getProfile.data: ', data)
      if (data) {
        state.status = 'got_user';
        state.authUser = data;
      }
    } catch (error) {
      console.error('getProfile Error: ', error)
      throw error
    }
  }

  // const getAuthUser = () => state.authUser;

  // console.log('>>> 2. state.status:', state.status);
  return {
    state,
    // getStatus,
    // getAuthUser,
    // getRole,
    getToken,
    getAccessToken,
    getProfile,
  }
})
