import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module'
import {LayoutModule} from './layout/module/layout.module'
import {FormsModule} from '@angular/forms'
import{DataBindingModule} from './layout/module/databiding.module';
import { DanhSachgheNgoiComponent } from './layout/danh-sachghe-ngoi/danh-sachghe-ngoi.component';
import { GhengoiComponent } from './layout/danh-sachghe-ngoi/ghengoi/ghengoi.component'
import { GheNgoiModule } from './layout/module/danhsachsongoi.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    DataBindingModule,
    GheNgoiModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
