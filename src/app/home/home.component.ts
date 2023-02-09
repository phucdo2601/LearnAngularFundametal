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

  

  public listFruit2 : FruitObj[] = [
    {
      name: "apple",
      price: 20000, 
      isDownSale: true,
    },
    {
      name: "grape",
      price: 798797.12, 
      isDownSale: false,
    },
    {
      name: "orange",
      price: 75645, 
      isDownSale: true,
    },
    {
      name: "banana",
      price: 67657, 
      isDownSale: false,
    },
    {
      name: "pineapple",
      price: 34535, 
      isDownSale: true,
    },
    {
      name: "strawberry",
      price: -1234, 
      isDownSale: false,
    },
  ];

  constructor() { }

  ngOnInit() {
    console.log('trai cay = ', this.listFruit2);
    
  }

  public resetName() : void {
    this.name = "";
    console.log('reset name');
    
  }

}

interface FruitObj {
  name: string;
  price: number;
  isDownSale: boolean;
}
