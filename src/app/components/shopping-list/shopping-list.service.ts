import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Butter', 1)
  ];


}
