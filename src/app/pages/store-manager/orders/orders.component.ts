import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { OrderData } from 'src/app/app.model';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { AppService } from 'src/app/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit, OnDestroy {

  orderDummy: OrderData[];
  orderList: any;
  displayedCols: Array<string>;
  allowMultiSelect: true;
  selection = new SelectionModel<OrderData>(this.allowMultiSelect, []);
  private subscription: Subscription;

  constructor(public dialog: MatDialog, public appService: AppService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.subscription = this.appService.getOrders().subscribe(data => {
      this.orderList = data;
    });
    this.orderList = new MatTableDataSource<OrderData>(this.orderDummy);
    this.displayedCols = ['select', 'id', 'totalPrice', 'customerName', 'orderStatus', 'edit'];
    this.orderList.paginator = this.paginator;
    this.orderList.sort = this.sort;
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.orderList.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.orderList.data.forEach(row => this.selection.select(row));
  }

  deleteSelectedRow() {
    console.log(this.selection.selected);
  }

  openDialog(row): void {
    setTimeout(() => {
      const dialogRef = this.dialog.open(OrderDetailsComponent, {
        width: "600px",
        data: row.selected ? row.selected[0] : '',
      });
      console.log(row.selected)
    }, 500);

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();

  }

}
