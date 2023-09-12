import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
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

  activeRecipe = null;
  showRecipeForm: boolean = false;
  recipeList: recipeList[] = [];
  cardId!: number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.recipeList);
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
  onRecipeAdded(newRecipe: recipeList) {
    this.recipeList.push(newRecipe);
  }
}
