import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() sendRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  //| When we call the Recipe model, our execution IS our constructor firing off with the information to assign
  recipes: Recipe[] = [
    new Recipe(
      'Dagwood',
      'Simple test description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
    new Recipe(
      'Carrot Mash',
      'Simple test description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
    new Recipe(
      'Broth',
      'Simple test description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
  ];

  constructor() { }

  ngOnInit(): void {}

  loadRecipe(recipe: Recipe){
    this.sendRecipe.emit(recipe);
  };

}
