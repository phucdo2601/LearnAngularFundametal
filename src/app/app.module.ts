import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';

@NgModule({
  // phai khai bao cac component dc tao moi trong declarations
  declarations: [
    AppComponent, 
    ProductListComponent,
    ProductDetailComponent,
    StarComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
