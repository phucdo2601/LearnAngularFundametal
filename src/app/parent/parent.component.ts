import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public parentMessage : string = '';
  @ViewChild('ChildPhuc') childPhuc: ChildComponent | any; 
  @ViewChild('ChildHoang') ChildHoang: ChildComponent | any; 

  ngOnInit(): void {
    
  }

  public childGreeting(name : string){
    console.log("Who is child ", name);
    
     this.parentMessage = `Hi Child ${name}`;
  }

  public giveMoneyForChild() {
    this.childPhuc?.choTien(10);
    this.ChildHoang?.choTien(24);
  }

}
