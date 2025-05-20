export interface IIngradient {
  name: string;
  measure: string;
}

export interface ICoctail {
  dateModified: string | null;
  id: number;    //idDrink
  name: string; //strDrink
  thumb: string | null; // strDrinkThumb
  instructions: string | null; //strInstructions
  isAlcoholic: string | null; // strAlcoholic
  category: string | null; //strCategory
  forGlass: string | null; // strGlass
  ingredients: IIngradient[]
}

