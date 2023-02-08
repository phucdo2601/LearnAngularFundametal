import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product;

  constructor() {
    
    this.product = new Product('', '');

   }

   changeDetail(form: NgForm) {
    console.log(form.value);

    this.product.productCode = form.value.productCode;
    this.product.productCode = this.product.productCode.toUpperCase();
    
    
   }

  ngOnInit() {
  }

  



}
