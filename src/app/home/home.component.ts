import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string = "Phuc Do";
  public age: number = 15;

  public listFruit : string[] = ['apple', 'grape', 'orange', 'pineapple', 'strawberry', 'blackberry'];

  public listFruit2 : FruitObj[] = [
    {
      name: "apple",
      price: 20000, 
      isDownSale: true,
    },
    {
      name: "grape",
      price: 798797.12, 
      isDownSale: false,
    },
    {
      name: "orange",
      price: 75645, 
      isDownSale: true,
    },
    {
      name: "banana",
      price: 67657, 
      isDownSale: false,
    },
    {
      name: "pineapple",
      price: 34535, 
      isDownSale: true,
    },
    {
      name: "strawberry",
      price: -1234, 
      isDownSale: false,
    },
  ];

  public districts: string[] = ['Quận Huyện'];

  public listCities : CityObj[] = [
    { city: 'Chọn thành phố', district: ['Quận Huyện'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
    {
      city: 'Bắc Kạn',
      district: [
        'Thị xã Bắc Kạn',
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
        'Huyện Chợ Đồn',
        'Huyện Chợ Mới',
        'Huyện Na Rì',
        'Huyện Ngân Sơn',
        'Huyện Pác Nặm',
      ],
    },

  ];

  public counter = 0;

  public counterBinhPhuong = 0;


  constructor(private common: CommonService) {

   }

  ngOnInit() {
    console.log('cities = ', this.listCities);
    this.counter = this.common.getCounter();
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }

  public resetName() : void {
    this.name = "";
    console.log('reset name');
    
  }

  public changeCity(event: any)  {
    const city: any = event.target.value;
    console.log('city = ', city);
    if (!city) return
    // cach 1:
    // const search = this.listCities.filter(data => data.city === event.target.value);
    // console.log("search = ", search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }
    
    // cach 2
    this.districts = this.listCities.find(data => data.city === event.target.value)?.district || [];
  }

}

interface FruitObj {
  name: string;
  price: number;
  isDownSale: boolean;
}

interface CityObj {
  city: string;
  district: string[];
}