import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreManagerRoutingModule } from './store-manager-routing.module';
import { StoreManagerComponent } from './store-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [StoreManagerComponent, DashboardComponent, ProductsComponent, AddProductComponent],
  imports: [
    CommonModule,
    StoreManagerRoutingModule,
    SharedModule
  ]
})
export class StoreManagerModule { }
