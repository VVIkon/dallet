// const wsUpl = 'ws://192.168.1.104';
const wsUpl = 'ws://localhost:8080';

export const ROUTES_PATHS = {
  HOME: '/',
  HANGMAN: '/hangman',
  COCKTAILS: '/cocktails',
  COCKTAIL: '/cocktails/:rid',
  MSG: '/messendo',
  COCKTAIL_RANDOM: '/random',
  ABOUT: '/about',
  LOGIN: '/login',
  WEB_SOCKET: `${wsUpl}/ws`,
}

