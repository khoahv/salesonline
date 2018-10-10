import { Component, OnInit, Input, Output } from '@angular/core';
import {IProduct} from './../../shared/Product'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-phone-detail',
  templateUrl: './content-phone-detail.component.html',
  styleUrls: ['./content-phone-detail.component.css']
})
export class ContentPhoneDetailComponent implements OnInit {
  @Input() itemproductphones: Array<IProduct>
  @Output() eventDetail =  new EventEmitter();
  itemSP: Number =0;
  status: Boolean = false;

  constructor() { }
  ngOnInit() {
  }
  clickDetail(i){
    this.itemSP  = i;
    console.log(this.itemSP);
    
    
  }
  ClickHide(index){
    this.status = !this.status;
    console.log(this.status);
    console.log(index);
    
    
  }
}
