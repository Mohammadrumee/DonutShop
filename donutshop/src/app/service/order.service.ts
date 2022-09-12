import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Donutdetails } from '../interface/donutshop';
import { OrderCount } from '../interface/order-count';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  setOrderCart(donutDetails:Donutdetails) : void {
    donutDetails.status = true;
    localStorage.setItem(donutDetails.id, JSON.stringify(donutDetails));
  }

  getOrderCart() :Observable<Donutdetails> | any {

    let orderDetails : Observable<Donutdetails> | any = [];

    Object.keys(localStorage).forEach(data => {
      let returnUrl = JSON.parse(localStorage.getItem(data) || '{}');
      orderDetails.push(returnUrl);
    });

    return orderDetails;
  }

  removeFromLocalStorage(id :string){
    localStorage.removeItem(id);
  }


  private _orderCount : BehaviorSubject<OrderCount> = new BehaviorSubject<OrderCount>({
    cartTotal:0
  });

  private _orderCount$ : Observable<OrderCount> = this._orderCount.asObservable();

  getOrderCount() : Observable<OrderCount> {
    return this._orderCount$;
  }

  setOrderCount(latestValue:OrderCount) : void {
    this._orderCount.next(latestValue);
  }

}