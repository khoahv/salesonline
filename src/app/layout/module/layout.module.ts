import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './../../layout/header/header.component';
import { SlidebarComponent } from './../../layout/slidebar/slidebar.component';
import { ContentsComponent } from './../../layout/contents/contents.component';
import { FooterComponent } from './../../layout/footer/footer.component';
import { LayoutComponent } from './../../layout/layout/layout.component';
import { SliderComponent } from './../../layout/slider/slider.component';
import { ContentsLaptopComponent } from './../../layout/contents-laptop/contents-laptop.component';
import { CommonModule } from '../../../../node_modules/@angular/common';
@NgModule({
  declarations: [
    HeaderComponent,
    SlidebarComponent,
    ContentsComponent,
    FooterComponent,
    LayoutComponent,
    SliderComponent,
    ContentsLaptopComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
 exports : [
    HeaderComponent,
    SlidebarComponent,
    ContentsComponent,
    FooterComponent,
    LayoutComponent,
    ContentsLaptopComponent,
    SliderComponent
]
})
export class LayoutModule { }
