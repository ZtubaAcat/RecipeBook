import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeList: any[] = [];
  cardId!: number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
}
