import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    FormsModule,
    RouterModule.forChild([
      { path: "shopping-list", component: ShoppingListComponent },
    ])
  ]
})
export class ShoppingListModule { }
