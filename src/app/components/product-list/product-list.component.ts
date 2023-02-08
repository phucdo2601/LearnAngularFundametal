import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] =[
    new Product("P01", 'Hat'),
    new Product("P02", 'Jeans')
  ]

  constructor() { }

  ngOnInit() {

  }

  changeStarRating(message: string) {
    console.log(`Message: ${message}`);
    
  }

}
