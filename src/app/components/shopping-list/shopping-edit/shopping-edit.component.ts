import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../../ingredient.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output() newItemEvent = new EventEmitter<Ingredient>();
  name = new FormControl('');
  amount = new FormControl(0);
  addItem() {
    const ing = {
      id: 2,
      name: this.name.value!,
      amount: this.amount.value!,
    };

    this.newItemEvent.emit(ing);
  }
  ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'Apple',
      amount: 2,
    },
  ];
  newItem: Ingredient = { id: 0, name: '', amount: 0 };
  private idCounter = 1;
  selectedData!: any;
  Color: boolean = false;
  isVisible = false;
  choseeItem(id: number) {
    this.selectedData = this.ingredients.find((item) => item.id === id);
    if (this.selectedData) {
      this.isVisible = true;
    }
  }

  addColor(emty: boolean) {
    this.Color = emty;
    if (this.newItem.name == '' || this.newItem.amount === null) {
      this.Color = false;
    }
    if (this.newItem.name != '' && this.newItem.amount > 0) {
      this.Color = true;
    }
  }
  /* addItem() {
    if (this.newItem.name && this.newItem.amount > 0) {
      this.idCounter++;
      const newItem = {
        id: this.idCounter,
        name: this.newItem.name,
        amount: this.newItem.amount,
      };

      this.ingredients.push(newItem);
      console.log(newItem);
      this.clearInput();
    }
  }*/
  clearInput() {
    this.newItem = { id: 0, name: '', amount: 0 }; // Reset the ID to 0
    this.isVisible = false;
  }
  deleteItem(id: number) {
    this.ingredients = this.ingredients.filter((item) => item.id !== id);
    this.clearInput();
  }
}
