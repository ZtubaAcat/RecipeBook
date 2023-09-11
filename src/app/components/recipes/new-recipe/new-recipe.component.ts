import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  @Input() recipe: RecipeDetailsComponent | any;
  name = new FormControl('');
  imgPath = new FormControl('');
  description = new FormControl('');
  ingredient = new FormControl([]);
  recipeList = {
    name: '',
    imagePath: '',
    description: '',
    ingredients: [{ name: '', amount: null }],
  };
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.recipe);
  }
  addRecipe() {
    const newId = this.recipe.length + 1;
    const nameValue = this.name.value || '';
    const imagePathValue = this.imgPath.value || '';
    const descriptionValue = this.description.value || '';
    const ingerdientsValue = this.ingredient.value || [];
    if (nameValue !== '' && imagePathValue !== '' && descriptionValue !== '') {
      const list = {
        name: nameValue,
        imgPath: imagePathValue,
        description: descriptionValue,
        ingredient: ingerdientsValue,
      };
      this.recipe.push(list);
      console.log(list);
    }
  }
  addIngredient() {
    this.recipe.ingredients.push({ name: '', amount: null }); // Yeni bir boş içerik ekleme
  }

  removeIngredient(index: number) {
    this.recipe.ingredients.splice(index, 1); // Belirtilen index'e sahip içeriği silme
  }

  saveForm() {}

  cancelForm() {}

  resetForm() {
    this.name.reset();
    this.imgPath.reset();
    this.description.reset();
    this.ingredient.reset();
  }
}
