import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Destroying NotFoundComponent"); // ngOnDestroy is not triggering
    localStorage.clear();
  }

}
