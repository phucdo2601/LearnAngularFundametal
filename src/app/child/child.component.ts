import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() name :string = "";

  @Output() childCall : EventEmitter<any> = new EventEmitter();

  public thanksGiveMonyFromDad : any = "";

  // public name : string = "Phuc Do";

  ngOnInit(): void {

  }

  public callParent() {
    console.log("Hi dad!");
    this.childCall.emit(this.name);
    
  }

  public choTien(amount: any) {
    this.thanksGiveMonyFromDad = `Hi. I am ${this.name}. Thank for giving me for ${amount}`;
    console.log(this.thanksGiveMonyFromDad);
   
    
  }
}