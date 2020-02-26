import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product/product.component';

const routes = [
  { path: '', component: ProductsListComponent, pathMatch: 'full' },
  { path: ':name', component: ProductsListComponent },
  { path: ':name/:id', component: ProductComponent }
];

@NgModule({
  declarations: [ProductsListComponent, ProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ProductsListModule { }
