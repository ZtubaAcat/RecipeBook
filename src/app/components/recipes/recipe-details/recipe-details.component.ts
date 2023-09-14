import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { ShoppingListComponent } from '../../shopping-list/shopping-list.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, OnChanges {
  @Input() recipe: RecipeCardComponent | any;
  @Output() recipeDeleted = new EventEmitter<number>();
  @Input() shoppingLİst: ShoppingListComponent | any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //console.log(this.recipe);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.recipe);
  }
  deleteRecipe() {
    this.recipeDeleted.emit();
  }
  addShopping() {}
  toShoopingList() {}
}
