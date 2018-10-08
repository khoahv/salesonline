import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DanhSachgheNgoiComponent} from './../../layout/danh-sachghe-ngoi/danh-sachghe-ngoi.component'
import {GhengoiComponent} from './../../layout/danh-sachghe-ngoi/ghengoi/ghengoi.component'
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    DanhSachgheNgoiComponent,
    GhengoiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
 exports : [
    DanhSachgheNgoiComponent,
    GhengoiComponent
]
})
export class GheNgoiModule { }
