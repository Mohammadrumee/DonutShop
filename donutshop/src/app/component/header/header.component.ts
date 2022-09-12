import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donutdetails } from 'src/app/interface/donutshop';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lgh : number | undefined;

  observableBlog: Donutdetails [] = [];

  constructor(private router:Router, private orderService:OrderService) { }
  
  ngOnInit(){
    // this.getApiResponse();
  }

  // getApiResponse(): void {
  //   this.orderService.getOrderCart();
  // }


  navigateToHome(){
    // this.ngOnDestroy();
    this.router.navigate(['home']);
  }

  navigateToCart(){
    // this.ngOnDestroy();
    this.router.navigate(['cart']);
  }

  // ngOnDestroy(): void {
  //   console.log("Destroying loop"); // ngOnDestroy is not triggering
  //   localStorage.clear();
  // }

}
