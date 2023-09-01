import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'Apple',
      amount: 2,
    },
  ];

  addItem(newItem: Ingredient) {
    this.ingredients.push(newItem);
    console.log(this.ingredients);
  }
  ngOnInit(): void {}
}
