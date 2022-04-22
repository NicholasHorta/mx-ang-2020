import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //| When we call the Recipe model, our execution IS our constructor firing off with the information to assign
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Simple test description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
    new Recipe(
      'A test recipe',
      'Simple test description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
    new Recipe(
      'A test recipe',
      'Simple test description',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
