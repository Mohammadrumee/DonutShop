import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donutdetails, Donutshop } from 'src/app/interface/donutshop';
import { OrderCount } from 'src/app/interface/order-count';
import { DonutShopServiceApiService } from 'src/app/service/donut-shop-service-api.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {
  
  title = 'Donut Details';

  donutDetails:Donutdetails | undefined;

  id: string = '';

  cartTotal:number = 0;

  constructor(private apiDonutShopService:DonutShopServiceApiService, private route:ActivatedRoute, 
    private router:Router, private orderService:OrderService) { }

  ngOnInit() :void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.getDonutDetailsById(id);
    });

    this.orderService.getOrderCount()
      .subscribe((orderCount) => {
        this.cartTotal = orderCount.cartTotal;
    });

  }

  getDonutDetailsById(id:number) :void{
    let donutDetails = this.apiDonutShopService.getDonutById(id);

    donutDetails?.subscribe(data => {
      this.donutDetails = data;

    });

  }

  addToCart(donutDetails:Donutdetails){    
    this.orderService.setOrderCart(donutDetails);

    let count:OrderCount = {
      cartTotal: this.cartTotal + 1
    }

    this.orderService.setOrderCount(count);

  }


}
