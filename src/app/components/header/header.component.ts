import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() emitChange: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  showComponent(arg: string){
    this.emitChange.emit(arg);
  }

}
