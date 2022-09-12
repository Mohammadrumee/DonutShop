import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Donutdetails } from 'src/app/interface/donutshop';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-donut-cart',
  templateUrl: './donut-cart.component.html',
  styleUrls: ['./donut-cart.component.css']
})
export class DonutCartComponent implements OnInit {

  price :number = 1;

  totalCalories :number = 0;

  totalPrice :number = 0;

  constructor(private orderService:OrderService) { }

  orderDetails : Observable<Donutdetails> | any = [];

  ngOnInit(){
    this.getAllDonutCart();
  }

  getAllDonutCart(): void {
    this.orderDetails = this.orderService.getOrderCart();

    this.orderDetails.forEach((value: Donutdetails) => {

      this.totalCalories =this.totalCalories + value.calories;
      this.totalPrice = this.totalPrice + 1;

    }); 

  }

  removeFromCart(id : string) {
    this.orderService.removeFromLocalStorage(id);

    this.totalCalories = 0;
    this.totalPrice = 0;
    this.getAllDonutCart();
  }

}
