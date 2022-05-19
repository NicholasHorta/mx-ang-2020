import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { AuthComponent } from './auth/auth.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './components/recipes/recipe-resolver.service';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: "", redirectTo: "recipes", pathMatch: 'full' },
  {
    path: "recipes", component: RecipesComponent, canActivate: [AuthGuardGuard], children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent, resolve: [RecipeResolverService] },
      { path: ":id/edit", component: RecipeEditComponent, resolve: [RecipeResolverService] },
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent },
  { path: "auth", component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
