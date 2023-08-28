import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  // pre-load lazy loaded modules (ie. not upfront, but between app load and user visiting relevant module) with preloadingStrategy
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
