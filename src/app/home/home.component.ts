import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string = "Phuc Do";
  public age: number = 15;

  public listFruit : string[] = ['apple', 'grape', 'orange', 'pineapple', 'strawberry', 'blackberry'];

  constructor() { }

  ngOnInit() {
    console.log('trai cay = ', this.listFruit);
    
  }

  public resetName() : void {
    this.name = "";
    console.log('reset name');
    
  }

}
