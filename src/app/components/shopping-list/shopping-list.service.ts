import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  notifyIngredientListUpdate: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Butter', 1)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addToList(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.notifyIngredientListUpdate.emit(this.ingredients.slice());
  }

}
