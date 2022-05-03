import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe(
      'Dagwood',
      'Simple Dagwood description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
    new Recipe(
      'Carrot Mash',
      'Simple Mash description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
    new Recipe(
      'Broth',
      'Simple Broth description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
  ];

  loadRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes() {
    // Slice gives us a copy of the array
    return this.recipes.slice();
  }
}
