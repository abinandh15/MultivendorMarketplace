import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreManagerRoutingModule } from './store-manager-routing.module';
import { StoreManagerComponent } from './store-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [StoreManagerComponent, DashboardComponent, ProductsComponent],
  imports: [
    CommonModule,
    StoreManagerRoutingModule
  ]
})
export class StoreManagerModule { }
