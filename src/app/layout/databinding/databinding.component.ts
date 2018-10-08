import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  name: String  = 'a';
  fullName: String = '';
  constructor() { }

  ngOnInit() {
  }

addFullName(fullname){
  console.log(fullname.value);
this.fullName = fullname.value;
  
}
}
