import { Ingredient } from './ingredient.model';

export interface RecipeList {
  title: string;
  description: string;
  imgPath: string;
  ingredients: Ingredient[];
  activeIndex?: number;
}
