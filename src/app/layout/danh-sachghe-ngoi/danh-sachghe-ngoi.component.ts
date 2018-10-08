import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sachghe-ngoi',
  templateUrl: './danh-sachghe-ngoi.component.html',
  styleUrls: ['./danh-sachghe-ngoi.component.css']
})
export class DanhSachgheNgoiComponent implements OnInit {
  public danhSachGhe: Array<any> = [
    {
      maghe: 'ghe1',
      trangthai: false
    },
    {
      maghe: 'ghe2',
      trangthai: false
    },
    {
      maghe: 'ghe2',
      trangthai: false
    }
  ]
  public soGheDat :number= 0;
  public sogheChuaDat : number = this.danhSachGhe.length;
  constructor() { }

  ngOnInit() {
  }
  Dat_Ghe_Parent(trangthaighe:boolean, maghe){
    alert(maghe);
    if(trangthaighe==true){
      this.soGheDat+=1;
      this.sogheChuaDat--;
    }
    else{
      this.soGheDat--;
      this.sogheChuaDat++;
    }

  }

}
