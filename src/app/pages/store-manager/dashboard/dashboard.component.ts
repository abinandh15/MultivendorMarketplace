import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';
import { OrderData } from 'src/app/app.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  ordersData: OrderData[];
  orders: any;
  selected: string;
  orderCols: Array<string>;
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  public chartLabelData: object;


  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  @ViewChild (MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.ordersData = [
      {id: 2534, customerName: 'Product1', totalPrice: '500', orderStatus: 'pending'},
      {id: 2524, customerName: 'Product11', totalPrice: '4100', orderStatus: 'dispatched'},
      {id: 2514, customerName: 'Product21', totalPrice: '300', orderStatus: 'completed'},
      {id: 2534, customerName: 'Product41', totalPrice: '200', orderStatus: 'shipped'},
      {id: 2544, customerName: 'Product4', totalPrice: '100', orderStatus: 'pending'},
      {id: 2534, customerName: 'Product3', totalPrice: '800', orderStatus: 'shipped'},
      {id: 2504, customerName: 'Product', totalPrice: '420', orderStatus: 'shipped'},
      {id: 2424, customerName: 'Product12', totalPrice: '650', orderStatus: 'pending'},
      {id: 2542, customerName: 'Product10', totalPrice: '700', orderStatus: 'shipped'},
    ];
    this.orders = new MatTableDataSource<OrderData>(this.ordersData);
    this.orderCols = ['id', 'customerName', 'totalPrice', 'orderStatus'];
    this.orders.paginator = this.paginator;
    this.chartLabelData = {
      Today : ['6', '8', '10', '12', '1', '3', '5', '7', '9', '11'],
      ThisMonth : ['1', '8', '10', '12', '1', '3', '5', '7', '9', '11'],
      LastMonth : ['6', '8', '10', '12', '1', '3', '5', '7', '9', '11'],
      ThisYear : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      LastYear : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    };
  }

  public updateGraph(event) {

    this.lineChartLabels = this.chartLabelData[this.selected];
  }

}
