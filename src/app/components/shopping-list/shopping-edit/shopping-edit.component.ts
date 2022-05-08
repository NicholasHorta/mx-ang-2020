import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form') listForm: NgForm;

  amtValue: number = 0;
  constructor(private shoppingListService: ShoppingListService) { }
  editSubscription: Subscription;
  editMode: boolean = false;
  editIndex: number | null = null; 
  editedItem: Ingredient;
  currentFields: Subscription;

  ngOnInit(){
    this.editSubscription = this.shoppingListService.startedEditing.subscribe((i: number) => {
      console.log(i)
      this.editIndex = i;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(i);
      this.listForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  onSubmit(form: NgForm){
    console.log(form)
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    if(this.editMode){
      console.log(ingredient, this.editIndex);
      this.shoppingListService.updateIngredient(this.editIndex, ingredient);
    } else {
      console.log(ingredient);
      this.shoppingListService.addIngredient(ingredient);
    }
    this.clearForm();
  }

  ngOnDestroy(){
    this.editSubscription.unsubscribe();
  }

  clearForm(){
    this.editMode = false;
    this.listForm.reset();
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.clearForm();
  }



}
