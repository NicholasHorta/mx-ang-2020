import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.model';
import { RecipeService } from '../components/recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  //| VIDEO 282 283 - goes over this topic

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  //: We need to append to our path the COLLECTION (recipes) and add .json  
  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://mx-recipe-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(data => {
      console.log(data);
    })
  }

  fetchRecipes(){
    this.http.get<Recipe[]>('https://mx-recipe-default-rtdb.firebaseio.com/recipes.json').subscribe(data => {
      console.log(data);
      //: We will get an error here as we havent informed TS what the TYPE is of the incoming data
      //: Which we will provide as a type received from the GET 
      this.recipeService.setRecipes(data);
    })
  }
}
