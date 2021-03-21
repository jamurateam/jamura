import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  images = [
    {
      image: '../../../assets/images/banner1.jpeg',
    },
    {
      image: '../../../assets/images/banner1.jpeg',
    },
    {
      image: '../../../assets/images/banner1.jpeg',
    },
    {
      image: '../../../assets/images/banner1.jpeg',
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
