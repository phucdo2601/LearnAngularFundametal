import { HttpServerService } from './../Services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  ngOnInit(): void {
    this.httpServerService.getComments().subscribe(data => {
      console.log("Responsed Data: ", data);
      
    });

    this.httpServerService.getRandomUsers(6).subscribe(data => {
      console.log("Responsed Data: ", data.results);
      
    });
  }

  constructor(private httpServerService : HttpServerService){

  }

}
