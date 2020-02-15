import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreManagerComponent } from './store-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'', component:StoreManagerComponent,children:
  [
    {path:'', redirectTo:'dashboard', pathMatch: "full"},
    {path:'dashboard', component:DashboardComponent},
    {path:'products', component:ProductsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreManagerRoutingModule { }
