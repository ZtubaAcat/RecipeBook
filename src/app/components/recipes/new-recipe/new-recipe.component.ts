import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  RecipeCardComponent,
  recipeList,
} from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  @Input() recipe: RecipeCardComponent | any;
  @Input() recipeList: recipeList[] = [];
  @Output() recipeAdded = new EventEmitter<recipeList>();

  recipeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    imgPath: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    ingredientName: new FormControl(''),
    ingredientAmount: new FormControl(0),
  });

  showForm = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  addRecipe() {
    if (this.recipeForm.valid) {
      const title = this.recipeForm.get('name')?.value || '';
      const imgPath = this.recipeForm.get('imgPath')?.value || '';
      const description = this.recipeForm.get('description')?.value || '';
      const ingredientName = this.recipeForm.get('ingredientName')?.value || '';
      const ingredientAmount =
        this.recipeForm.get('ingredientAmount')?.value || 0;

      const newRecipe: recipeList = {
        title,
        imgPath,
        description,
        ingredients: [
          {
            name: ingredientName,
            amount: ingredientAmount,
          },
        ],
      };

      this.recipeAdded.emit(newRecipe);
      this.resetForm();
    }
  }

  resetForm() {
    this.recipeForm.reset({
      name: '',
      imgPath: '',
      description: '',
      ingredientName: '',
      ingredientAmount: 0,
    });
  }

  addIngredients() {
    this.showForm = true;
  }

  removeIngredient() {
    this.showForm = false;
    this.recipeForm.get('ingredientName')?.reset('');
    this.recipeForm.get('ingredientAmount')?.reset(0);
  }
}
