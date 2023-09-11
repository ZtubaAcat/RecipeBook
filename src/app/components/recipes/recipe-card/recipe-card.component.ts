import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesComponent } from '../recipes.component';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: RecipesComponent | any;
  activeRecipe = null;
  showRecipeForm: boolean = false;
  recipeList: any[] = [];
  cardId!: number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
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
    this.route.params.subscribe((params) => {
      this.cardId = +params['id'];
      console.log(this.recipeList[this.cardId]);
    });
  }

  cardClick(recipe: any) {
    this.activeRecipe = recipe;
    this.showRecipeForm = false;
  }
}
