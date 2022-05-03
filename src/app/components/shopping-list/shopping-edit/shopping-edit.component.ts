import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent  {
  @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amtInput') amtInput: ElementRef;
  amtValue: number = 0;


  constructor(private shoppingListService: ShoppingListService) { }


  onSubmit(){
    console.log(this.amtValue)
    const nameValue = this.nameInput.nativeElement.value;
    const ingredient = new Ingredient(nameValue, this.amtValue);
    this.shoppingListService.addToList(ingredient);
  }


}
