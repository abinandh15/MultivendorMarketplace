import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderData } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public url = 'assets/data/'
  constructor(public http: HttpClient) { }

  public getOrders(): Observable<OrderData[]> {
    return this.http.get<OrderData[]>(this.url + 'orderData.json');
  }
}
