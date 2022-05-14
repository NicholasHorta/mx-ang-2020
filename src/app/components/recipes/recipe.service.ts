import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();
  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [];


  getRecipes() {
    // Slice gives us a copy of the array
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  sendIngredientsToShoppingList(recipe: Recipe){
    this.shoppingListService.addIngredients(recipe.ingredients);
  }


  addRecipe(recipe: Recipe){
    this.recipes.push(recipe)
    console.log(recipe)
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
