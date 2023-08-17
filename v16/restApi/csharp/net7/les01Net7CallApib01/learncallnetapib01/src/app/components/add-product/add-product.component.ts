import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { AddProductRequestModel } from 'src/app/models/request/product.addRequest.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct: Product = {
    id: '',
    name: '',
    type: '',
    color: '',
    price: 0
  };

  constructor(private productService: ProductsService, private router: Router) { }

  addProduct() : any {
     const requestModel: AddProductRequestModel = {
      name: this.newProduct.name,
      type: this.newProduct.type,
      color: this.newProduct.color,
      price: this.newProduct.price
    }
    this.productService.addProduct(this.newProduct).subscribe({
      next: (product) => {
        console.log(product);
        this.router.navigate(['products']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
