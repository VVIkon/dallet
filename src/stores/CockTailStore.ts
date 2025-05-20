import axios from 'axios'
import { defineStore } from 'pinia'
import { API_PATHS } from '../constants'
import type { ICoctail } from '@/module/coctail/types'

export const useCockTailStore = defineStore('cockail', {
  state: () => ({
    ingredients: [] as string[],
    component: '',
    cocktails: [] as ICoctail[],
    cocktail: {} as ICoctail | null,
  }),

  actions: {
    modyfyCocktails(drink: { [key: string]: string | number | null }): ICoctail | null {
      if (!drink) return null

      const ingr = []
      for (let i = 1; i <= 15; i++) {
        if (drink[`strIngredient${i}`] !== null) {
          ingr.push({
            name: drink[`strIngredient${i}`],
            measure: drink[`strMeasure${i}`],
          })
        }
      }
      return {
        id: drink.idDrink,
        dateModified: drink.dateModified,
        name: drink.strDrink,
        thumb: drink.strDrinkThumb,
        instructions: drink.strInstructions,
        isAlcoholic: drink.strAlcoholic,
        category: drink.strCategory,
        forGlass: drink.strGlass,
        ingredients: ingr,
      } as ICoctail
    },

    async getIngredients() {
      try {
        const data = await axios.get(API_PATHS.INGREDIENTS_URL)
        const drinks = data?.data?.drinks
        this.ingredients = drinks.map((el: { [key: string]: string | number | null }) => el.strIngredient1)
      } catch (err) {
        console.error('getIngredients.Error:', err)
      }
    },
    async getCocktailsByIngradient(component: string | null) {
      if (!component) return
      try {
        const data = await axios.get(`${API_PATHS.COCKTAILS_BY_INGR_URL}${component}`)
        const drinks = data?.data?.drinks
        drinks.map((el: { [key: string]: string | number | null }) => this.modyfyCocktails(el))
        this.cocktails = drinks
      } catch (err) {
        console.error('getCocktailsByIngradient.Error:', err)
      }
    },

    async getCocktailsById(id: string) {
      if (!id) return
      try {
        const data = await axios.get(`${API_PATHS.COCKTAIL_BY_ID}${id}`)
        const drink = data?.data?.drinks[0] || null
        if (!drink) return
        this.cocktail = this.modyfyCocktails(drink)
      } catch (err) {
        console.error('getCocktailsById.Error:', err)
      }
    },
    async getRandomCocktail() {
      try {
        const data = await axios.get(`${API_PATHS.COCKTAIL_RANDOM}`)
        const drink = data?.data?.drinks[0] || null
        if (!drink) return
        this.cocktail = this.modyfyCocktails(drink)
      } catch (err) {
        console.error('getCocktailsById.Error:', err)
      }
    },
    setIngredient(val: string) {
      this.component = val
    },
  },
})
