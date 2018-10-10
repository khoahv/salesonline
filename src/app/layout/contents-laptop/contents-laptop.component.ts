import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contents-laptop',
  templateUrl: './contents-laptop.component.html',
  styleUrls: ['./contents-laptop.component.css']
})
export class ContentsLaptopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listProductLapTop: Array<any> = [{
    title: "ASUS",
    description: 'the Asus ROG Strix Flare is the latest addition to Asus lineup of ROG branded devices',
    img: '../../../assets/img/lt_hp.png',
    price: 700
  },
  {
    title: "LENOVO",
    img: '../../../assets/img/lt_lenovo.png',
    description: 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012',
    price: 600
  },
  {
    title: "MACBOOK",
    img: '../../../assets/img/lt_macbook.png',
    description: 'The MacBook is a brand of notebook computers manufactured by Apple Inc',
    price: 500    
  },
  {
    title: "ROG LAPTOP",
    img: '../../../assets/img/lt_rog.png',
    description: 'A young global smartphone brand focusing on introducing perfect sound quality',
    price: 400
  }]
}
