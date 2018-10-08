import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghengoi',
  templateUrl: './ghengoi.component.html',
  styleUrls: ['./ghengoi.component.css']
})
export class GhengoiComponent implements OnInit {
public trangthai :any = false;
  constructor() { }
@Output() eventDatghe = new EventEmitter();
  ngOnInit() {
  }
  datGhe(value: boolean){
    if(value==true){
      this.trangthai = false
    }
    else{
      this.trangthai = true;
    }
    this.eventDatghe.emit(this.trangthai);
  }

}
