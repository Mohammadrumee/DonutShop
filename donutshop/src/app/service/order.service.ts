import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Donutdetails } from '../interface/donutshop';
import { OrderCount } from '../interface/order-count';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  observableBlog: Donutdetails [] = [];


  setOrderCart(donutDetails:Donutdetails) : void {
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

}