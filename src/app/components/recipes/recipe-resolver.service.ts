import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /// Goal is to return either an array of Recipes, but we can't because we need to load it first 
    /// Or use an Observable that will yeild an array of Recipes - We will go with this option
    console.log("RESOLVER RAN -- Recipes");
    //| We need to ensure our resolver only overrides IF there are no recipes as the resolver will run whenever we do anything within the routes it's assigned to
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
      //: We're not subscribing here, because the angular Resolver will subscribe for us to find out when the data is there 
    } else {
      return null;
    }
  }
  //| Now we have a resolver that loads the data before the recipes page is loaded
}
