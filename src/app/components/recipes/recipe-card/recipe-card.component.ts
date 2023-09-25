import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from '../../../recipe.service';
import { RecipeList } from '../../../recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: RecipeList | any;
  @Output() recipeAdded = new EventEmitter<RecipeList>();
  @Output() recipeDeleted = new EventEmitter<number>();
  @Output() toShoppingList = new EventEmitter<RecipeList>();
  @Output() editRecipeClicked = new EventEmitter<RecipeList>();

  recipeList: RecipeList[] = [];
  activeRecipeIndex!: number;
  showRecipeForm: boolean = false;
  activeRecipe: any = null;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadRecipesFromLocalStorage();
  }

  loadRecipesFromLocalStorage() {
    this.recipeService.loadRecipesFromLocalStorage();
    this.recipeService.recipeList$.subscribe((recipes: RecipeList[]) => {
      this.recipeList = recipes;
    });
  }

  onRecipeAdded(newRecipe: RecipeList) {
    this.recipeService.addRecipe(newRecipe);
    this.showRecipeForm = false;
  }

  deleteRecipe(index: any): void {
    this.recipeService.deleteRecipe(this.activeRecipeIndex);
  }

  shoppingList(index: any): void {
    this.recipeService.addToShoppingList(
      this.recipeList[this.activeRecipeIndex].ingredients
    );
  }
  cardClick(recipe: any, recipeIndex: number) {
    this.activeRecipe = recipe;
    this.activeRecipeIndex = recipeIndex;
    this.showRecipeForm = false;
    this.recipeService.setActiveRecipe(this.activeRecipe);
  }
  editRecipe() {
    this.activeRecipe.activeIndex = this.activeRecipeIndex;
    console.log('tıklandı');
    this.showRecipeForm = true;
  }
  addNewRecipe() {
    this.activeRecipe = null;
    this.showRecipeForm = true;
  }
  recipeEdited() {
    this.showRecipeForm = false;
  }
}
