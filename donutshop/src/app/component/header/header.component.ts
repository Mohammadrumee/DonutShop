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

  constructor(private router:Router) { }
  
  ngOnInit(){
  }


  navigateToHome(){
    this.router.navigate(['home']);
  }

  navigateToCart(){
    this.router.navigate(['cart']);
  }

}
