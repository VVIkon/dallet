// import axios from 'axios'
import { defineStore, } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'
import { AUTH_PATHS } from '@/constants'

  interface State {
    ticket: string;
    token: string;
    status: 'logout' | 'got_token' | 'send_code' | 'success' | 'access_denid';
    role: 'guest' | 'user' | 'superUser' | 'admin'
  }

  export const useAuthStore = defineStore('auth', () => {
    const state = reactive<State>({
      ticket: '',
      token: localStorage.getItem('token') || '',
      role: 'guest',
	    status: 'logout',
    })


    async function getToken(name: string, pass: string) {
      try {
        const data = await axios.post(AUTH_PATHS.AUTH_URL, { name, pass });
        const accessToken = data?.data?.access_token;
        if (accessToken) {
          localStorage.setItem('token', accessToken);
          state.status = 'got_token';
        }
      } catch (error) {
        console.error(error)
        throw error
      }
    }

    return {
      state,
      status: state.status,
      role: state.role,
      getToken
    }
  })
