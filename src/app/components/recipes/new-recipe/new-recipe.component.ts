import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  @Input() recipe: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.recipe);
  }
}
