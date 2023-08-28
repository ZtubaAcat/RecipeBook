import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.ingredient.push({
      name: 'apple',
      amount: 5,
    });
    this.ingredient.push({
      name: 'Tomatoes',
      amount: 10,
    });
  }
}
/*recipeList: any[] = [];
  cardId!: number;
  constructor(private route: ActivatedRoute) {}
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
    this.route.params.subscribe((params) => {
      this.cardId = +params['id'];
      console.log(this.recipeList[this.cardId]);
    });
  } */
