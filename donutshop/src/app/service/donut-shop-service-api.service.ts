import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Donutdetails, Donutshop } from '../interface/donutshop';

@Injectable({
  providedIn: 'root'
})
export class DonutShopServiceApiService {

  constructor(private httpClient:HttpClient) { }

  getDonutList() : Observable<Donutshop>{
    return this.httpClient.get<Donutshop>(environment.apiDonutListEndpoint);
  }

  getDonutById(id:number) : Observable<Donutdetails> {
    return this.httpClient.get<Donutdetails>(environment.apiDonutDetailsEndpoint+ id +".json");
  }

}