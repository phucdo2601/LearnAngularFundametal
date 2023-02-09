import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss'],
})
export class PostDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
    const payload = {
      body: 'some comment 7',
      postId: 7,
    };
    this.httpServerService.postCommentsd(payload).subscribe((data) => {
      console.log('', data);
    });
  }
}
