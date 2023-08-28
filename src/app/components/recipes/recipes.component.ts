import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeList: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.recipeList.push({
      title: 'Tasty Schnitzel',
      description: 'A super-tasty Schnitzel - just awesome!',
      imgPath:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    });
    this.recipeList.push({
      title: 'Big Fat Burger',
      description: 'What else you need to say?',
      imgPath:
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    });
  }
  getrecipeList() {
    return this.recipeList;
  }
}
