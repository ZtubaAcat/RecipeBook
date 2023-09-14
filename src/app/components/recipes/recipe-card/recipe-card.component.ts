import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type s = {
  name: string;
  amount: number;
};

export type recipeList = {
  title: string;
  description: string;
  imgPath: string;
  ingredients: s[];
};

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: recipeList | any;
  @Output() recipeAdded = new EventEmitter<recipeList>();
  @Output() recipeDeleted = new EventEmitter<number>();
  activeRecipe = null;
  showRecipeForm: boolean = false;
  recipeList: recipeList[] = [];
  activeRecipeIndex!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadRecipesFromLocalStorage(); // Sayfa yenilendiğinde verileri yükle

    this.route.queryParams.subscribe((params) => {
      // Query parametresine göre özel bir işlem yapabilirsiniz (isteğe bağlı)
    });
  }

  loadRecipesFromLocalStorage() {
    const storedRecipes = localStorage.getItem('recipes');

    if (storedRecipes) {
      this.recipeList = JSON.parse(storedRecipes);
    } else {
      this.recipeList.push({
        title: 'Tasty Schnitzel',
        description: 'A super-tasty Schnitzel - just awesome!',
        imgPath:
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        ingredients: [
          {
            name: 'meat',
            amount: 1,
          },
          {
            name: 'fries',
            amount: 20,
          },
        ],
      });

      this.recipeList.push({
        title: 'Big Fat Burger',
        description: 'What else you need to say?',
        imgPath:
          'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        ingredients: [
          {
            name: 'apple',
            amount: 1,
          },
          {
            name: 'cheese',
            amount: 20,
          },
        ],
      });
    }
  }

  saveRecipesToLocalStorage() {
    localStorage.setItem('recipes', JSON.stringify(this.recipeList));
  }

  cardClick(recipe: any, recipeIndex: number) {
    this.activeRecipe = recipe;
    this.activeRecipeIndex = recipeIndex;
    this.showRecipeForm = false;
  }

  onRecipeAdded(newRecipe: recipeList) {
    this.recipeList.push(newRecipe);
    this.saveRecipesToLocalStorage(); // Yeni tarif eklediğinizde local storage'a kaydet
  }

  deleteRecipe(index: any): void {
    this.recipeList.splice(this.activeRecipeIndex, 1);
    this.activeRecipe = null;
    this.saveRecipesToLocalStorage(); // Tarifi sildiğinizde local storage'dan kaldır
  }
}
