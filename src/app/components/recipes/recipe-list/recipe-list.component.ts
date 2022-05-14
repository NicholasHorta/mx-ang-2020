import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  constructor(private recipeService: RecipeService) { }

  subscription: Subscription;

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      console.log('Subscribed')
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  };

  ngOnDestroy(){
    console.log('UnSubscribed')
    this.subscription.unsubscribe();
  }
};
