import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchases } from './purchases';

@Injectable({
  providedIn: 'root'
})
export class RestPurchasesService {

  constructor(private http:HttpClient) { }

  url:string = " http://localhost:3000/gift_accounts";

  getPurchases(){
    return this.http.get<Purchases[]>(this.url);
  }
}
