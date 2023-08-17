import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddProductRequestModel } from '../models/request/product.addRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl : string = 'https://localhost:44339/api';

  constructor(private http: HttpClient) { }

  getAllProducts () : Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl + "/Product/getAllProducts");
  }

  addProduct(newProduct: AddProductRequestModel)  {
    return this.http.post<any>(this.baseApiUrl + "/Product/addNewProduct", newProduct);
  }

  getProductById(id: string) : Observable<Product> {
    return this.http.get<any>(this.baseApiUrl + `/Product/getProductById/${id}`);
  }

  editProduct(updateProduct: Product) {
    return this.http.put<any>(this.baseApiUrl + `/Product/updateProduct/${updateProduct.id}`, updateProduct);
  }

  deleteProduct(id: string) {
    return this.http.delete<any>(this.baseApiUrl + `/Product/deleteProduct/${id}`);
  }
}
