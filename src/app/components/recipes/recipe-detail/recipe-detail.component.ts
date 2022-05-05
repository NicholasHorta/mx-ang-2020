import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { };

  recipe: Recipe;
  id: number;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      this.id = +params['id']
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  addToShoppingList() {
    this.recipeService.sendIngredientsToShoppingList(this.recipe);
  }
};
