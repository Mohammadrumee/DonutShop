import { Component, OnInit } from '@angular/core';
import { Donutshop } from 'src/app/interface/donutshop';
import { DonutShopServiceApiService } from 'src/app/service/donut-shop-service-api.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {

  cartTotal:number = 0;

  donutList:Donutshop [] | any = [];

  constructor(private apiDonutShopService:DonutShopServiceApiService, private orderService:OrderService){
  }

  ngOnInit(){
    this.getApiResponse();

    this.orderService.getOrderCount()
    .subscribe((orderCount) => {
      this.cartTotal = orderCount.cartTotal;
    });
  }

  
  getApiResponse(): void {
    this.apiDonutShopService.getDonutList()
    .subscribe((data) => {
      this.donutList = [...data.results];    
    });
  }

}
