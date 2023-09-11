import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesComponent } from '../recipes.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, OnChanges {
  @Input() recipe: RecipesComponent | any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    //console.log(this.recipe);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.recipe);
  }
}
