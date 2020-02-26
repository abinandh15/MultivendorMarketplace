import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass']
})
export class PagesComponent implements OnInit {
    NavItems: { name:string, link:string }[];
  constructor() { }

  ngOnInit(): void {
    this.NavItems=[
                    { name:"Home", link:"/" },
                    { name:"Products", link:"/products" },
                    { name:"Dashboard", link:"/store-manager" },
                    ];
  }

}
