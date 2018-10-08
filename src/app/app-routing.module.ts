import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout/layout.component'
import {DatabindingComponent} from './layout/databinding/databinding.component'
import {DanhSachgheNgoiComponent} from './../../src/app/layout/danh-sachghe-ngoi/danh-sachghe-ngoi.component'
const routes: Routes = [
    {path: 'bt1', component: LayoutComponent},
    {path: 'bt2', component: DatabindingComponent},
    {path: 'bt3', component: DanhSachgheNgoiComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}