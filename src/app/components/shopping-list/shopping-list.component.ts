import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from 'src/app/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  name = new FormControl('');
  amount = new FormControl(0, { nonNullable: true });
  idCounter = 1;
  selectedData!: any;
  canadd: boolean = false;
  isVisible = false;

  ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'Apple',
      amount: 2,
    },
  ];

  addItem() {
    const newId = this.ingredients.length + 1;
    const nameValue = this.name.value || '';
    const amountValue = this.amount.value || 0;
    if (this.name.value !== '' && this.amount.value > 0) {
      this.canadd = true;
      const ing = {
        id: newId,
        name: nameValue,
        amount: amountValue,
      };
      this.canadd = true;
      this.ingredients.push(ing);
      this.clearInput();
    }
  }

  choseeItem(id: number) {
    this.selectedData = this.ingredients.find((item) => item.id === id);

    if (this.selectedData) {
      this.isVisible = true;
      this.name.setValue(this.selectedData.name);
      this.amount.setValue(this.selectedData.amount);
    }
  }
  clearInput() {
    this.name.reset();
    this.amount.reset();
    this.isVisible = false;
    this.canadd = false;
  }
  updateItem() {
    console.log('tıklandı ');
    if (this.selectedData) {
      this.selectedData.name = this.name.value;
      this.selectedData.amount = this.amount.value;
      this.clearInput();
      this.isVisible = false;
    }
  }

  deleteItem(id: number) {
    this.ingredients = this.ingredients.filter((item) => item.id !== id);
    this.clearInput();
  }
  ngOnInit(): void {}
}
