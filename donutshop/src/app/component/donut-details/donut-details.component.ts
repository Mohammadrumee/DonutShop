import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donutdetails, Donutshop } from 'src/app/interface/donutshop';
import { DonutShopServiceApiService } from 'src/app/service/donut-shop-service-api.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {
  
  title = 'Donut Details';

  donutDetails:Donutdetails | undefined;

  constructor(private apiDonutShopService:DonutShopServiceApiService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() :void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.getDonutDetailsById(id);
    });
  }

  getDonutDetailsById(id:number) :void{
    let donutDetails = this.apiDonutShopService.getDonutById(id);

    donutDetails?.subscribe(data => {
      this.donutDetails = data;

    });

  }

}
