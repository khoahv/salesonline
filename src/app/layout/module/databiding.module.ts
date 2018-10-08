import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DatabindingComponent} from './../../layout/databinding/databinding.component'
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
   DatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
 exports : [
    DatabindingComponent
]
})
export class DataBindingModule { }
