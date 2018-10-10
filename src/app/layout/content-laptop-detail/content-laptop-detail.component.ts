import { Component, OnInit , Input} from '@angular/core';
import {IProduct} from './../../shared/Product'

@Component({
  selector: 'app-content-laptop-detail',
  templateUrl: './content-laptop-detail.component.html',
  styleUrls: ['./content-laptop-detail.component.css']
})
export class ContentLaptopDetailComponent implements OnInit {
  @Input() itemproductlaptops: Array<IProduct>
  index : Number = 0;
  status: Boolean = true;
  // check: Number;
  constructor() { }

  ngOnInit() {
  }
  clickDetail(i){
    this.index = i;
    console.log(this.index);
  }
  clickHide(){
    this.status = !this.status;
  }
}
