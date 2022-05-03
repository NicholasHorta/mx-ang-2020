import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ingredients: Ingredient[] = [];

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
  }

  addToList(ingredient: Ingredient){
    this.shoppingListService.ingredients.push(ingredient)
  }

}
