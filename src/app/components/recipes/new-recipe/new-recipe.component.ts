import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../../../ingredient.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  @Input() recipe: any;
  recipeList = {
    name: '',
    imagePath: '',
    description: '',
    ingredients: [
      { name: '', amount: null }, // Varsayılan olarak boş bir öğe ekleyebilirsiniz
    ],
  };
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.recipe);
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
    this.recipe = {
      name: '',
      imagePath: '',
      description: '',
      ingredients: [{ name: '', amount: null }], // Yeni bir boş içerik ekleyin
    };
  }
}
