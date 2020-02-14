import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {path:'', component:PagesComponent , children:[
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

