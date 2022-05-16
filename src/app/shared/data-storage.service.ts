import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../components/recipes/recipe.model';
import { RecipeService } from '../components/recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  //| VIDEO 282 283 - goes over this topic

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  //: We need to append to our path the COLLECTION (recipes) and add .json  
  storeRecipes() {
    console.log('storedRecipes()');
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://mx-recipe-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(data => {
      console.log(data);
    })
  }

  fetchRecipes() {
    console.log('fetchRecipes()');
    return this.http.get<Recipe[]>('https://mx-recipe-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          console.log(recipes)
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
          })
        }),
        // Allows us to execute some code in place without aletring the data funnelled through the Observable
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}


