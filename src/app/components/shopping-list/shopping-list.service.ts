import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }
  ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  startedEditing: Subject<number> = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Butter', 1)
  ];

  getIngredient(index: number){
    return this.ingredients[index];
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(i: number, ingredientChange: Ingredient){
    console.log(this.ingredients[i]);
    this.ingredients[i] = ingredientChange;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(i: number){
    this.ingredients.splice(i, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
