import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Donutdetails } from 'src/app/interface/donutshop';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private orderService:OrderService) { }

  cartTotal:number = 0;
  favoriteTotal:number = 0;

  subscription:Subscription | undefined;
  
  ngOnInit(){
    this.subscription = this.orderService.getOrderCount()
    .subscribe((orderCount) => {
      this.cartTotal = orderCount.cartTotal;
    });
  }


  navigateToHome(){
    this.router.navigate(['home']);
    // this.getCountOfCartItems();
  }

  navigateToCart(){
    this.router.navigate(['cart']);
    // this.getCountOfCartItems();
  }


}
