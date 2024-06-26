import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { RecipeService } from './recipe.service';
import { RecipeCardComponent } from './components/recipes/recipe-card/recipe-card.component';
import { NewRecipeComponent } from './components/recipes/new-recipe/new-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    NavbarComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    NewRecipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],

  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
