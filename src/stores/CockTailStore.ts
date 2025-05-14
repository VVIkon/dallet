import axios from 'axios'
import { defineStore, } from 'pinia'
import { API_PATHS } from '../constants'

interface IIngradient {
  strIngredient1: string;
}
interface ICoctail {
  idDrink: number;
}

export const useCockTailStore = defineStore('cockail', {
  state: () => ({
    ingredients: <IIngradient[]>[],
    ingredient: <string | null>null,
    cocktails: <ICoctail[]>[],
  }),

  actions: {
    async getIngredients() {
      try {
        const data = await axios.get(API_PATHS.INGREDIENTS_URL)
        this.ingredients= data?.data?.drinks
      } catch (err) {
        console.error('Error:', err)
      }
    },
    async getCocktails(ingredient: string | null) {
      if (ingredient) {
        const data = await axios.get(`${API_PATHS.COCKTAILS_BY_INGR_URL}${ingredient}`)
        this.cocktails = data?.data?.drinks;
      }
    },
    setIngredient(val: string | null) {
      this.ingredient = val;
    }
    // async fetchUser(userId) {
    //   const response = await fetch(`https://api.example.com/users/${userId}`);
    //   this.user = await response.json();
    // }
  }
})
