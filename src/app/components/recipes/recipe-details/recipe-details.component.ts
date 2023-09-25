import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { RecipeList } from 'src/app/recipe.model';
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
  @Output() toShoppingList = new EventEmitter<RecipeList>();
  @Output() editRecipeEmitter = new EventEmitter<RecipeList>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}
  deleteRecipe() {
    this.recipeDeleted.emit();
  }

  shoppingList() {
    // this.toShoppingList.emit();
  }

  editRecipe() {
    this.editRecipeEmitter.emit();
  }
}
