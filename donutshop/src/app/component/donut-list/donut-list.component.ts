import { Component, OnInit } from '@angular/core';
import { Donutshop } from 'src/app/interface/donutshop';
import { DonutShopServiceApiService } from 'src/app/service/donut-shop-service-api.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {

  title = 'Donut Shop API Service';

  count :number | undefined;
  donutList:Donutshop [] | any = [];

  constructor(private apiDonutShopService:DonutShopServiceApiService){
  }

   ngOnInit(){
    this.getApiResponse();
  }

  
  getApiResponse(): void {
    this.apiDonutShopService.getDonutList()
    .subscribe((data) => {

      this.count = data.count;
      this.donutList = [...data.results];    
    });
  }

}
