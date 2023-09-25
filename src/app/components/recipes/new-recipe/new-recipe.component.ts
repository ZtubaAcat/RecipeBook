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
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { RecipeList } from 'src/app/recipe.model';
import { RecipeService } from 'src/app/recipe.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit, OnChanges {
  @Output() recipeAdded = new EventEmitter<RecipeList>();
  @Input() editRecipeData: RecipeList | null = null;
  @Output() recipeEdited = new EventEmitter<RecipeList>();
  activeRecipe: any;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.recipeService.activeRecipe$.subscribe((recipe) => {
      this.activeRecipe = recipe;
    });
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.editRecipeData);
    this.bulidForm();
    console.log(changes);
    if (changes['editRecipeData'].currentValue) {
      this.setEdit(changes['editRecipeData'].currentValue);
    }
  }
  setEdit(editRecipeData: any) {
    this.recipeForm.patchValue({
      name: editRecipeData.title,
      imgPath: editRecipeData.imgPath,
      description: editRecipeData.description,
    });

    while (this.ingredients.length > 0) {
      this.ingredients.removeAt(0);
    }

    for (const ingredient of editRecipeData.ingredients) {
      this.addIngredient();
      const lastIndex = this.ingredients.length - 1;
      this.ingredients.at(lastIndex)?.patchValue({
        ingredientName: ingredient.name,
        ingredientAmount: ingredient.amount,
      });
    }
  }
  bulidForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      imgPath: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      ingredients: new FormArray([]),
    });
  }

  addRecipe() {
    if (this.recipeForm.valid) {
      if (this.editRecipeData) {
        this.editRecipe();
      } else {
        this.addNewRecipe();
      }
    }
  }
  addNewRecipe() {
    console.log(this.recipeForm.value);
    const title = this.recipeForm.get('name')?.value || '';
    const imgPath = this.recipeForm.get('imgPath')?.value || '';
    const description = this.recipeForm.get('description')?.value || '';

    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    const ingredientData = ingredients.controls.map((control) => ({
      name: control.get('ingredientName')?.value || '',
      amount: control.get('ingredientAmount')?.value || 0,
      id: uuidv4(),
    }));

    const newRecipe: RecipeList = {
      title,
      imgPath,
      description,
      ingredients: ingredientData,
    };

    this.recipeAdded.emit(newRecipe);
    this.resetForm();
  }
  resetForm() {
    this.recipeForm.reset({
      name: '',
      imgPath: '',
      description: '',
      ingredients: [],
    });
  }
  editRecipe() {
    console.log(this.recipeForm.value);
    const title = this.recipeForm.get('name')?.value || '';
    const imgPath = this.recipeForm.get('imgPath')?.value || '';
    const description = this.recipeForm.get('description')?.value || '';

    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    const ingredientData = ingredients.controls.map((control) => ({
      name: control.get('ingredientName')?.value || '',
      amount: control.get('ingredientAmount')?.value || 0,
      id: uuidv4(),
    }));

    const newRecipe: RecipeList = {
      title,
      imgPath,
      description,
      ingredients: ingredientData,
    };

    this.recipeService.updateRecipe(
      this.editRecipeData?.activeIndex,
      newRecipe
    );
    this.resetForm();
    this.recipeEdited.emit();
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
