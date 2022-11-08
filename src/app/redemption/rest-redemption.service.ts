import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Redemption } from './redemption';

@Injectable({
  providedIn: 'root'
})
export class RestRedemptionService {

  constructor(private http:HttpClient) { }

  url:string = " http://localhost:3000/gift_redemptions";

  getRedemption(){
    return this.http.get<Redemption[]>(this.url);
  }
}
