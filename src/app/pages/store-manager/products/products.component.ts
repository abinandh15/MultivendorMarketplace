import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductData } from '../../../app.model';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  productDummy: ProductData[];
  productList: any;
  displayedCols: Array<string>;

  constructor() {
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.productDummy = [
      { name: 'hello', position: 1, price: 500, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'product2', position: 2, price: 5030, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'product6', position: 3, price: 5200, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'product7', position: 4, price: 100, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'product9', position: 5, price: 50, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'product10', position: 6, price: 5, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'lkjlkj', position: 7, price: 500, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'hellasdo', position: 8, price: 500, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'helasdflo', position: 9, price: 501, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'helasdfasdflo', position: 10, price: 507, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'helasdfasdlo', position: 11, price: 512, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'helasdfasdlo', position: 12, price: 124, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'helasdfaslo', position: 13, price: 420, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'heldfasdflo', position: 14, price: 720, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
      { name: 'hfasdfello', position: 15, price: 70, image: 'https://img.icons8.com/plasticine/2x/product.png', stock: 5 },
    ]
    this.productList = new MatTableDataSource<ProductData>(this.productDummy);
    this.displayedCols = ['position', 'name', 'image', 'price', 'stock'];
    this.productList.paginator = this.paginator;
    this.productList.sort = this.sort;
  }

}
