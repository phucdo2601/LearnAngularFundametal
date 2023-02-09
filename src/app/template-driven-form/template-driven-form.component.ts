import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  public name : string = "";

  constructor(private common : CommonService){

  }

  ngOnInit(): void {
    
  }

  public submitForm() : void {
    // console.log("submit form: name=" + this.name);
    const dataSend = {
      name : this.name,
      age : 23,
      sex: "Male",
      relationShip: "single",
    };
    this.common.submitData(dataSend);
  }

}
