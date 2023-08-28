import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeDetailsComponent } from './recipe-details.component';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipesComponent } from '../recipes.component';

describe('RecipeDetailsComponent', () => {
  let component: RecipeDetailsComponent;
  let fixture: ComponentFixture<RecipeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipeDetailsComponent,
        RecipeCardComponent,
        RecipesComponent,
      ],
    });
    fixture = TestBed.createComponent(RecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
