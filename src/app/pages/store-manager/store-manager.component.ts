import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-store-manager',
  templateUrl: './store-manager.component.html',
  styleUrls: ['./store-manager.component.sass']
})
export class StoreManagerComponent implements OnInit {

  NavItems: { name: string, link: string }[];

  constructor(public media: MediaObserver) {}

  ngOnInit(): void {
    this.NavItems = [
      { "name": "Dashboard", 'link': '/store-manager' },
      { "name": "Products", 'link': '/store-manager/products' },
      { "name": "Categories", 'link': '/store-manager' },
      { "name": "Orders", 'link': '/store-manager/orders' }
    ];
  }

}
