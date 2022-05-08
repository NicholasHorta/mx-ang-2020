import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null; // If an id is present, this will be true
      console.log(this.editMode, params);
      /// We should call the initForm function called whenever we reload the page 
      this.initForm();
    });
  };

  private initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDesc = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imgUrl': new FormControl(recipeImgPath),
      'desc': new FormControl(recipeDesc),
      'ingredients': recipeIngredients
    })
  }

  get controls(){
    const controls = (this.recipeForm.get('ingredients') as FormArray).controls;
    return controls;
  }

  onAddIngredient(){
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    )
  }

}
