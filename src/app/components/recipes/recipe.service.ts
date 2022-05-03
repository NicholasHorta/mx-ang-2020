import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe(
      'Dagwood',
      'Simple test description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
    new Recipe(
      'Carrot Mash',
      'Simple test description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
    new Recipe(
      'Broth',
      'Simple test description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
  ];

  getRecipes() {
    //. Slice gives us a copy of the array
    return this.recipes.slice();
  }
}
