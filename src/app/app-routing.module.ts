import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';


const routes: Routes = [
  {path:'', component:PagesComponent , children:[
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: 'store-manager', loadChildren: () => import('./pages/store-manager/store-manager.module').then(m => m.StoreManagerModule) },
    { path: 'products', loadChildren: () => import('./pages/products-list/products-list.module').then(m => m.ProductsListModule) },
    {path:'**', component:NotFoundComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

