import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-manager',
  templateUrl: './store-manager.component.html',
  styleUrls: ['./store-manager.component.sass']
})
export class StoreManagerComponent implements OnInit {
  
  NavItems:Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.NavItems=['Dashboard','Products', 'Orders', 'Categories'];
  }

}
