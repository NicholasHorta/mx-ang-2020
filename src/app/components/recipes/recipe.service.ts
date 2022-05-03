import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

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

  loadRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes() {
    // Slice gives us a copy of the array
    return this.recipes.slice();
  }
}
