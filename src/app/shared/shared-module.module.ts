import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { PlaceholderDirective } from "./placeholder.directive";
import { SpinnerComponent } from "./spinner/spinner/spinner.component";

@NgModule({
    declarations: [
        AlertComponent,
        SpinnerComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        SpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ]
})

export class SharedModule {}