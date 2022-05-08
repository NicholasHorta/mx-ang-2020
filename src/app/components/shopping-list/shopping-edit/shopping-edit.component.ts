import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent  {
  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amtInput') amtInput: ElementRef;
  amtValue: number = 0;


  constructor(private shoppingListService: ShoppingListService) { }


  onSubmit(form: NgForm){
    console.log(form)
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    this.shoppingListService.addToList(ingredient);
  }


}
