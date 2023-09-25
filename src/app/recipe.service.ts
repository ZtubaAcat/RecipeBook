import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RecipeList } from './recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeListSubject = new BehaviorSubject<RecipeList[]>([]);
  recipeList$ = this.recipeListSubject.asObservable();

  private shoppingListSubject = new BehaviorSubject<Ingredient[]>([]);
  shoppingList$ = this.shoppingListSubject.asObservable();

  private activeRecipeSubject = new BehaviorSubject<any>(null);
  activeRecipe$ = this.activeRecipeSubject.asObservable();

  constructor() {}

  loadRecipesFromLocalStorage() {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      const recipes = JSON.parse(storedRecipes);
      this.recipeListSubject.next(recipes);
    }
  }

  saveRecipesToLocalStorage(recipes: RecipeList[]) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.recipeListSubject.next(recipes);
  }

  addRecipe(newRecipe: RecipeList) {
    const recipes = this.recipeListSubject.value;
    recipes.push(newRecipe);
    this.saveRecipesToLocalStorage(recipes);
  }

  deleteRecipe(index: number) {
    const recipes = this.recipeListSubject.value;
    recipes.splice(index, 1);
    this.saveRecipesToLocalStorage(recipes);
  }

  addToShoppingList(ingredients: Ingredient[]) {
    const currentShoppingList = this.shoppingListSubject.value;
    currentShoppingList.push(...ingredients);
    this.shoppingListSubject.next(currentShoppingList);
  }
  updateRecipe(activeIndex: any, recipeData: any) {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      const recipes = JSON.parse(storedRecipes);
      recipes[activeIndex] = recipeData;
      this.saveRecipesToLocalStorage(recipes);
    }
  }

  removeFromShoppingList(ingredient: Ingredient) {
    const currentShoppingList = this.shoppingListSubject.value;
    const updatedList = currentShoppingList.filter(
      (item) => item.id !== ingredient.id
    );
    this.shoppingListSubject.next(updatedList);
  }

  setActiveRecipe(recipe: any) {
    this.activeRecipeSubject.next(recipe);
  }

  getActiveRecipe() {
    return this.activeRecipeSubject.value;
  }
}
