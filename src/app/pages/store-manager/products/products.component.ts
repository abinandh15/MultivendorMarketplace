import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductData } from '../../../app.model';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  productDummy: ProductData[];
  productList: any;
  displayedCols: Array<string>;
  allowMultiSelect = true;
  selection = new SelectionModel<ProductData>(this.allowMultiSelect, []);

  constructor(public dialog: MatDialog){

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
    ];
    this.productList = new MatTableDataSource<ProductData>(this.productDummy);
    this.displayedCols = ['select', 'position', 'name', 'image', 'price', 'stock', 'edit'];
    this.productList.paginator = this.paginator;
    this.productList.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.productList.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.productList.data.forEach(row => this.selection.select(row));
  }

  deleteSelectedRow() {
      console.log(this.selection.selected);
  }

  openDialog(row): void{
    setTimeout(() => {
      const dialogRef = this.dialog.open(AddProductComponent,{
        width: "600px", 
        data: row.selected ? row.selected[0] : '',     
      });
      console.log(row.selected)
    }, 500);
   
  }
}
