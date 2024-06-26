import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/recipe.service';
import { Ingredient } from 'src/app/ingredient.model';
import { RecipeList } from 'src/app/recipe.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  @Output() listadded = new EventEmitter<Ingredient>();
  @Input() recipeFromRecipeCard: RecipeList | any;

  form: FormGroup;
  buttonStyle = {};
  idCounter = 1;
  selectedData: Ingredient | undefined;
  canadd: boolean = false;
  isVisible = false;

  ingredients: Ingredient[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      amount: [0, [Validators.required, this.amountValidator]],
    });

    const storedIngredients = localStorage.getItem('ingredients');
    if (storedIngredients) {
      this.ingredients = JSON.parse(storedIngredients);
    }
  }

  addItem() {
    const newId = uuidv4();
    const nameValue = this.form.get('name')?.value || '';
    const amountValue = this.form.get('amount')?.value || 0;

    if (nameValue !== '' && amountValue > 0) {
      const ing: Ingredient = {
        id: newId,
        name: nameValue,
        amount: amountValue,
      };
      this.ingredients.push(ing);
      this.clearInput();
      this.updateButtonStyle();

      localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
      console.log(ing);
    }
  }

  chooseItem(id: string) {
    this.selectedData = this.ingredients.find((item) => item.id === id);

    if (this.selectedData) {
      this.isVisible = true;
      this.form.patchValue({
        name: this.selectedData.name,
        amount: this.selectedData.amount,
      });
    }
  }

  clearInput() {
    this.form.reset({
      name: '',
      amount: 0,
    });
    this.isVisible = false;
    this.canadd = false;
  }

  updateItem() {
    if (this.selectedData) {
      this.selectedData.name = this.form.get('name')?.value;
      this.selectedData.amount = this.form.get('amount')?.value;
      this.clearInput();
      this.isVisible = false;

      localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
    }
  }

  deleteItem(id: string) {
    this.ingredients = this.ingredients.filter((item) => item.id !== id);
    this.clearInput();

    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
  }

  updateButtonStyle() {
    if (this.form.valid) {
      this.buttonStyle = { 'background-color': 'green' };
    } else {
      this.buttonStyle = { 'background-color': 'lightgreen' };
    }
  }

  amountValidator(control: any) {
    const amountValue = control.value;
    if (amountValue === null || amountValue === undefined) {
      return null;
    }
    return amountValue > 0 ? null : { amountInvalid: true };
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.updateButtonStyle();
    });
  }
}
