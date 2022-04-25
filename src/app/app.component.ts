import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main';
  component: string = 'r';
  changeComponentHandler(arg: string){
    this.component = arg;
  }
}
