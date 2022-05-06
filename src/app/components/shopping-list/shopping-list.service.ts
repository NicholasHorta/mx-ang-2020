import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }
  notifyIngredientListUpdate: Subject<Ingredient[]> = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Butter', 1)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addToList(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.notifyIngredientListUpdate.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.notifyIngredientListUpdate.next(this.ingredients.slice());
  }

}
