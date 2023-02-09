import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter : number = 0;

  constructor() { }

  public binhPhuong(n : number) {
    return n * n;
  }

  public getCounter() : number { 
    return this.counter;
  }

  public setCounter(n : number) : void {
    this.counter = n;
  }
}
