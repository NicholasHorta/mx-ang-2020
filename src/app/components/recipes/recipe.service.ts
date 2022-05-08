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

  private recipes: Recipe[] = [
    new Recipe(
      'Big Daddy Dogwood',
      'Ooh! That dog O` mine! He love them dogwoods',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Cheese', 2),
        new Ingredient('Hotdogs', 1),
        new Ingredient('Onions', 1),
        new Ingredient('Chillis', 1)
      ]
    ),
    new Recipe(
      'Butter Bean Medley',
      'A fresh summer green bean supreme dish',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [
        new Ingredient('Green Beans', 4),
        new Ingredient('Feta', 1),
        new Ingredient('Olive Oil', 1),
        new Ingredient('Oregano', 1)
      ]
    ),
    new Recipe(
      'Leftover BBQ Broth',
      'Simple Broth for those pesky bones after a BBQ',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [
        new Ingredient('Bones', 6),
        new Ingredient('Beef Stock', 2),
        new Ingredient('Garlic', 3)
      ]
    ),
  ];


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
}
