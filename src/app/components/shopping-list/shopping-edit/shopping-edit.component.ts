import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent  {
  @Output() sendToShoppingList: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amtInput') amtInput: ElementRef;
  amtValue: number = 0;


  constructor() { }


  onSubmit(){
    console.log(this.amtValue)
    const nameValue = this.nameInput.nativeElement.value;
    const ingredient = new Ingredient(nameValue, this.amtValue);
    this.sendToShoppingList.emit(ingredient)
  }


}
