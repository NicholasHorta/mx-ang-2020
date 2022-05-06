import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService) { }

  private ingChangedSub: Subscription;

  ingredients: Ingredient[] = [];

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingChangedSub = this.shoppingListService.notifyIngredientListUpdate.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(){
    this.ingChangedSub.unsubscribe();
  }

}
