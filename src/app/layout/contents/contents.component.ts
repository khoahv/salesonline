import { Component, OnInit } from '@angular/core';
import {IProduct} from './../../shared/Product'
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  listProductPhone: Array<any> = [{
    title: "Iphone X",
    img: '../../../assets/img/sp_iphoneX.png',
    description: 'iPhone X features a new all-screen design. Face ID, which makes your face your password',
    price: 700
  },
  {
    title: "BlackBerry",
    img: '../../../assets/img/sp_blackberry.png',
    description: 'BlackBerry is a line of smartphones, tablets, and services originally designed',
    price: 600
  },
  {
    title: "Vivo",
    img: '../../../assets/img/sp_vivo850.png',
    description: 'A young global smartphone brand focusing on introducing perfect sound quality',
    price: 500    
  },
  {
    title: "Note 7",
    img: '../../../assets/img/sp_note7.png',
    description: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason',
    price: 400
  }]
  constructor() { }

  ngOnInit() {
  }
}
