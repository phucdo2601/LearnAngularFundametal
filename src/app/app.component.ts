import { Inventor } from './common/inventor';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  title = 'les01-lab1-afterviewinit';

  inventors: Inventor[] = [
    {
      id: 1, 
      first: 'Albert',
      last: 'Einstein',
      year: 1879,
      passed: 1955,
    },

    {
      id: 2, 
      first: 'testFirst02',
      last: 'testLast02',
      year: 1879,
      passed: 1955,
    },

    {
      id: 3, 
      first: 'testFirst03',
      last: 'testLast03',
      year: 1879,
      passed: 1955,
    },
  ]

  // hien thi noi dung dc truyen vao
  show(innerHtml: string) {
    let item = document.querySelector('#list');
    if (item){
      item.innerHTML = innerHtml;
    }
  }

  //day du lieu len field hien thi
  render(callback : (data :string) => any) {
    let innerHtml = this.inventors.map( item => {
      //gan cac phan vo r chuyen thanh mot chuoi
      return `
        <tr>
          <td>${item.id}</td>
          <td>${item.first}</td>
          <td>${item.last}</td>
          <td>${item.year}</td>
          <td>${item.passed}</td>
        <tr>
      `
    }).join('');

    callback(innerHtml);
  }

  // phuong thuc hien thi moi dung len trang cua lop AfterViewInit
  ngAfterViewInit(): void {
    this.render(this.show);
  }
}
