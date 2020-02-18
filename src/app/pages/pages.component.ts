import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass']
})
export class PagesComponent implements OnInit {
    NavItems:Array<string>;
  constructor() { }

  ngOnInit(): void {
    this.NavItems=['Dashboard','Products', 'Orders', 'Categories'];
  }

}
