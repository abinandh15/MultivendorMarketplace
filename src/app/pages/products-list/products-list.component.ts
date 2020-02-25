import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  products: { name: string, image: string, price: number }[];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      { name: 'Product1', image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-3_large.png?format=jpg&quality=90&v=1530129341', price: 25 },
      { name: 'Product2', image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-4_large.png?format=jpg&quality=90&v=1530129360', price: 254 },
      { name: 'Product3', image: 'https://cdn.shopify.com/s/files/1/0169/2660/5412/collections/placeholder-images-collection-1_large_807560ab-9024-46ea-ab0a-bb49df2b3bb8_1200x1200.png?v=1551259616', price: 25 },
      { name: 'Product3', image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-6_large.png?format=jpg&quality=90&v=1530129217', price: 255 },
      { name: 'Product3', image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-5_large.png?format=jpg&quality=90&v=1530129199', price: 525 },
      { name: 'Product3', image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-2_large.png?format=jpg&quality=90&v=1530129318', price: 15 },
    ]
  }

}
