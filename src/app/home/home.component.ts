import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string = "Phuc Do";
  public age: number = 15;

  constructor() { }

  ngOnInit() {
  }

  public resetName() : void {
    this.name = "";
    console.log('reset name');
    
  }

}
