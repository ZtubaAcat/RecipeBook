import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
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

  name = new FormControl('');
  imgPath = new FormControl('');
  description = new FormControl('');
  ingredientName = new FormControl('');
  ingredientAmount = new FormControl(0);
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.recipeList);
  }

  addRecipe() {
    console.log(this.recipeList);

    const title = this.name.value || '';
    const imgPath = this.imgPath.value || '';
    const description = this.description.value || '';
    const ingredientName = this.ingredientName || '';
    const ingredientAmount = this.ingredientAmount || 0;

    if (title !== '' && imgPath !== '' && description !== '') {
      const newRecipe: recipeList = {
        title,
        imgPath,
        description,
        ingredients: [
          {
            name: ingredientName.value!,
            amount: ingredientAmount.value!,
          },
        ],
      };

      this.recipeAdded.emit(newRecipe);
      this.resetForm();
    }

    console.log(this.recipe);
  }

  removeIngredient(index: number) {
    this.recipe.ingredients.splice(index, 1);
  }

  addIngredient() {}

  cancelForm() {}

  resetForm() {
    this.name.reset();
    this.imgPath.reset();
    this.description.reset();
    this.ingredientName.reset();
    this.ingredientAmount.reset();
  }
}
