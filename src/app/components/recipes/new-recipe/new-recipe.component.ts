import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
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
    ingredients: new FormArray([]),
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  addRecipe() {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm.value);
      const title = this.recipeForm.get('name')?.value || '';
      const imgPath = this.recipeForm.get('imgPath')?.value || '';
      const description = this.recipeForm.get('description')?.value || '';

      const ingredients = this.recipeForm.get('ingredients') as FormArray;
      const ingredientData = ingredients.controls.map((control) => ({
        name: control.get('ingredientName')?.value || '',
        amount: control.get('ingredientAmount')?.value || 0,
      }));

      const newRecipe: recipeList = {
        title,
        imgPath,
        description,
        ingredients: ingredientData,
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
      ingredients: [],
    });
  }

  addIngredient() {
    const ingredientGroup = new FormGroup({
      ingredientName: new FormControl(''),
      ingredientAmount: new FormControl(0),
    });

    this.ingredients.push(ingredientGroup);
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as any;
  }
}
