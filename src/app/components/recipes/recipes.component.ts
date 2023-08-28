import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
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
  getrecipeList() {
    return this.recipeList;
  }
}
